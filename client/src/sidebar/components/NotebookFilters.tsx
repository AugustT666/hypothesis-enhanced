import { ProfileIcon } from '@hypothesis/frontend-shared';

import { useSidebarStore } from '../store';
import FilterSelect from './FilterSelect';
import {
  useDocumentFilterOptions,
  useUserFilterOptions,
} from './hooks/use-filter-options';

/**
 * Filters for the Notebook
 */
function NotebookFilters() {
  const store = useSidebarStore();

  const userFilter = store.getFilter('user');
  const userFilterOptions = useUserFilterOptions();

  const documentFilter = store.getFilter('uri');
  const documentFilterOptions = useDocumentFilterOptions();

  return (
    <div className="flex flex-wrap gap-2">
      <FilterSelect
        defaultOption={{ value: '', display: '全部文档' }}
        onSelect={document => store.setFilter('uri', document)}
        options={documentFilterOptions}
        selectedOption={documentFilter}
        title="按文档筛选"
      />
      <FilterSelect
        defaultOption={{ value: '', display: 'Everybody' }}
        icon={ProfileIcon}
        onSelect={userFilter => store.setFilter('user', userFilter)}
        options={userFilterOptions}
        selectedOption={userFilter}
        title="Filter by user"
      />
    </div>
  );
}

export default NotebookFilters;
