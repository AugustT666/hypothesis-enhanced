# install-native-host.ps1 - Windows installer for the Hypothesis Enhanced
# native messaging host. Run in PowerShell:
#   powershell -NoProfile -ExecutionPolicy Bypass -File install-native-host.ps1 <ExtensionId>
#
# Or right-click -> "Run with PowerShell" (it will prompt for the extension ID
# if not provided as an argument).

param(
  [Parameter(Position=0)]
  [string]$ExtensionId
)

$ErrorActionPreference = "Stop"

# Prompt for extension ID if not provided.
if (-not $ExtensionId) {
  Write-Host "Hypothesis Enhanced - Native Messaging Host Installer" -ForegroundColor Cyan
  Write-Host ""
  Write-Host "Extension ID can be found in edge://extensions (or chrome://extensions)"
  Write-Host "on the Hypothesis Enhanced card, it's a 32-character lowercase string."
  Write-Host ""
  $ExtensionId = Read-Host "Enter Extension ID"
}

if (-not $ExtensionId -or $ExtensionId.Length -lt 10) {
  Write-Host "[ERROR] Invalid extension ID." -ForegroundColor Red
  exit 1
}

# Check node.
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
  Write-Host "[ERROR] Node.js was not found. Install it from https://nodejs.org/" -ForegroundColor Red
  exit 1
}
$nodePath = $nodeCmd.Source
Write-Host "[OK] Node.js found: $nodePath" -ForegroundColor Green

# Resolve repo root (parent of the script's directory).
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir

$dataDir = Join-Path $env:LOCALAPPDATA "H Local\native-host"

# Create data directory.
New-Item -ItemType Directory -Force -Path $dataDir | Out-Null

# Copy server and host scripts.
Copy-Item (Join-Path $scriptDir "server.mjs") (Join-Path $dataDir "server.mjs") -Force
Copy-Item (Join-Path $scriptDir "native-host.mjs") (Join-Path $dataDir "native-host.mjs") -Force
Write-Host "[OK] Copied server.mjs and native-host.mjs to $dataDir" -ForegroundColor Green

# Generate wrapper.cmd with absolute node path.
$cmdContent = "@echo off`r`n`"$nodePath`" `"%~dp0native-host.mjs`""
Set-Content -Path (Join-Path $dataDir "hlocal-host.cmd") -Value $cmdContent -Encoding ASCII
Write-Host "[OK] Generated hlocal-host.cmd" -ForegroundColor Green

# Generate Native Messaging manifest.
$manifest = @{
  name = "com.hlocal.server"
  description = "Hypothesis Enhanced local annotation server"
  path = (Join-Path $dataDir "hlocal-host.cmd")
  type = "stdio"
  allowed_origins = @("chrome-extension://$ExtensionId/")
} | ConvertTo-Json -Depth 3

$manifestPath = Join-Path $dataDir "com.hlocal.server.json"
Set-Content -Path $manifestPath -Value $manifest -Encoding UTF8
Write-Host "[OK] Generated manifest at $manifestPath" -ForegroundColor Green

# Register in registry for both Edge and Chrome.
$registryPaths = @(
  "HKCU:\Software\Microsoft\Edge\NativeMessagingHosts\com.hlocal.server",
  "HKCU:\Software\Google\Chrome\NativeMessagingHosts\com.hlocal.server"
)

foreach ($regPath in $registryPaths) {
  New-Item -Force -Path $regPath | Out-Null
  Set-Item -Path $regPath -Value $manifestPath
  $browser = if ($regPath -match "Edge") { "Edge" } else { "Chrome" }
  Write-Host "[OK] Registered for $browser" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installation complete!" -ForegroundColor Cyan
Write-Host "Please FULLY restart your browser (close all windows and reopen)." -ForegroundColor Yellow
Write-Host "Then open the extension sidebar -> Share panel -> Create LAN room."
Write-Host ""
Write-Host "Data directory: $dataDir"
Write-Host "Logs: $(Join-Path $env:LOCALAPPDATA 'H Local\native-host.log')"
