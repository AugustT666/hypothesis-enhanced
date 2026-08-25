/**
 * Generates install-native-host.bat with chunked base64 to work around
 * cmd.exe's 8191-character-per-line limit.
 *
 * Usage: node gen-bat.cjs
 * Output: writes the bat file to the same directory.
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const serverSrc = fs.readFileSync(path.join(DIR, 'server.mjs'));
const hostSrc = fs.readFileSync(path.join(DIR, 'native-host.mjs'));

const sB64 = Buffer.from(serverSrc).toString('base64');
const hB64 = Buffer.from(hostSrc).toString('base64');

const CHUNK_SIZE = 7000; // well under 8191 cmd.exe limit
function chunk(str) {
  const out = [];
  for (let i = 0; i < str.length; i += CHUNK_SIZE) {
    out.push(str.slice(i, i + CHUNK_SIZE));
  }
  return out;
}

const sChunks = chunk(sB64);
const hChunks = chunk(hB64);

// Build the bat script
let lines = [];
lines.push('@echo off');
lines.push('setlocal EnableExtensions');
lines.push('set "EXTENSION_ID=__EXTENSION_ID__"');
lines.push('set "DATA_DIR=%LOCALAPPDATA%\\H Local\\native-host"');
lines.push('');

// Server chunks
sChunks.forEach((c, i) => {
  lines.push('set "SERVER_B64_' + (i + 1) + '=' + c + '"');
});
lines.push('');

// Host chunks
hChunks.forEach((c, i) => {
  lines.push('set "HOST_B64_' + (i + 1) + '=' + c + '"');
});
lines.push('');

lines.push('where node >nul 2>nul');
lines.push('if errorlevel 1 (');
lines.push('  echo [ERROR] Node.js was not found on PATH. Install Node.js first: https://nodejs.org/');
lines.push('  pause');
lines.push('  exit /b 1');
lines.push(')');
lines.push('');
lines.push('if not exist "%DATA_DIR%" mkdir "%DATA_DIR%"');
lines.push('');

// Build the PowerShell install script, then encode it with -EncodedCommand
// (UTF-16LE base64) so no cmd.exe escaping/line-continuation is needed at all.
// NOTE: keep %~dp0 literal inside the generated wrapper.cmd — inside the
// encoded blob cmd.exe never expands it, and when wrapper.cmd later runs from
// its install directory %~dp0 resolves to that directory correctly.
const sVars = sChunks.map((_, i) => '$env:SERVER_B64_' + (i + 1)).join(' + ');
const hVars = hChunks.map((_, i) => '$env:HOST_B64_' + (i + 1)).join(' + ');

const psScript = [
  "$ErrorActionPreference='Stop'",
  '$dir=$env:DATA_DIR',
  '$node=(Get-Command node).Source',
  '$utf8=New-Object System.Text.UTF8Encoding($false)',
  '$sb64 = ' + sVars,
  '$hb64 = ' + hVars,
  "[IO.File]::WriteAllText((Join-Path $dir 'server.mjs'),[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($sb64)),$utf8)",
  "[IO.File]::WriteAllText((Join-Path $dir 'native-host.mjs'),[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($hb64)),$utf8)",
  "$wrapper='@echo off' + [Environment]::NewLine + '\"' + $node + '\" \"%~dp0native-host.mjs\"' + [Environment]::NewLine",
  "[IO.File]::WriteAllText((Join-Path $dir 'hlocal-host.cmd'),$wrapper,$utf8)",
  "$manifestPath=Join-Path $dir 'com.hlocal.server.json'",
  "$manifest=@{name='com.hlocal.server';description='Hypothesis Enhanced local annotation server';path=(Join-Path $dir 'hlocal-host.cmd');type='stdio';allowed_origins=@('chrome-extension://' + $env:EXTENSION_ID + '/')} | ConvertTo-Json -Depth 3",
  "[IO.File]::WriteAllText($manifestPath,$manifest,$utf8)",
  "foreach($root in @('HKCU:\\Software\\Google\\Chrome\\NativeMessagingHosts\\com.hlocal.server','HKCU:\\Software\\Microsoft\\Edge\\NativeMessagingHosts\\com.hlocal.server')){New-Item -Force -Path $root | Out-Null; Set-Item -Path $root -Value $manifestPath}",
].join('; ');

const psEncoded = Buffer.from(psScript, 'utf16le').toString('base64');
console.log('PS script:', psScript.length, 'chars; encoded:', psEncoded.length, 'chars');

lines.push('powershell -NoProfile -ExecutionPolicy Bypass -EncodedCommand ' + psEncoded);
lines.push('');
lines.push('if errorlevel 1 (');
lines.push('  echo [ERROR] Native host installation failed.');
lines.push('  pause');
lines.push('  exit /b 1');
lines.push(')');
lines.push('');
lines.push('echo [OK] H Local native host installed.');
lines.push('echo [OK] Please fully restart Chrome/Edge.');
lines.push('pause');
lines.push('');

const batContent = lines.join('\r\n');
const maxLineLen = Math.max(...lines.map(l => l.length));
console.log('Generated bat:', batContent.length, 'bytes');
console.log('Max line length:', maxLineLen, '(limit: 8191)');
console.log('Server chunks:', sChunks.length, '| Host chunks:', hChunks.length);

// Verify roundtrip
const sRebuilt = sChunks.join('');
const hRebuilt = hChunks.join('');
const sDecoded = Buffer.from(sRebuilt, 'base64').toString('utf8');
const hDecoded = Buffer.from(hRebuilt, 'base64').toString('utf8');
console.log('Server roundtrip OK:', sDecoded === serverSrc.toString('utf8'));
console.log('Host roundtrip OK:', hDecoded === hostSrc.toString('utf8'));

if (maxLineLen > 8191) {
  console.error('ERROR: Max line length exceeds cmd.exe limit!');
  process.exit(1);
}

// Write to browser-extension src and dist
const targets = [
  path.join(DIR, '..', 'browser-extension', 'src', 'native-host', 'install-native-host.bat'),
  path.join(DIR, '..', 'dist', 'hypothesis-enhanced', 'native-host', 'install-native-host.bat'),
];
for (const target of targets) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, batContent);
  console.log('Written:', target);
}
