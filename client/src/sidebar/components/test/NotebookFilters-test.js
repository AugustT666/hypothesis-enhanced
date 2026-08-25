import { ProfileIcon } from '@hypothesis/frontend-shared';
import { mockImportedComponents } from '@hypothesis/frontend-testing';
import { mount } from '@hypothesis/frontend-testing';

import NotebookFilters from '../NotebookFilters';
import { $imports } from '../NotebookFilters';

describe('NotebookFilters', () => {
  let fakeStore;
  let fakeUseDocumentFilterOptions;
  let fakeUseUserFilterOptions;

  const createComponent = () => {
    return mount(<NotebookFilters />);
  };

  beforeEach(() => {
    fakeUseDocumentFilterOptions = sinon.stub().returns([]);
    fakeUseUserFilterOptions = sinon.stub().returns([]);

    fakeStore = {
      getFilter: sinon.stub().returns(undefined),
      setFilter: sinon.stub(),
    };

    $imports.$mock(mockImportedComponents());
    $imports.$mock({
      './hooks/use-filter-options': {
        useDocumentFilterOptions: fakeUseDocumentFilterOptions,
        useUserFilterOptions: fakeUseUserFilterOptions,
      },
      '../store': { useSidebarStore: () => fakeStore },
    });
  });

  afterEach(() => {
    $imports.$restore();
  });

  it('should render a user filter with options', () => {
    fakeUseUserFilterOptions.returns([
      { display: 'One User', value: 'oneuser' },
    ]);

    const wrapper = createComponent();

    const selects = wrapper.find('FilterSelect');
    assert.equal(selects.length, 2);

    const documentProps = selects.at(0).props();
    assert.deepEqual(documentProps.defaultOption, {
      value: '',
      display: '全部文档',
    });
    assert.equal(documentProps.title, '按文档筛选');

    const props = selects.at(1).props();
    assert.deepEqual(props.options[0], {
      display: 'One User',
      value: 'oneuser',
    });
    assert.deepEqual(props.defaultOption, { value: '', display: 'Everybody' });
    assert.equal(props.icon, ProfileIcon);
    assert.equal(props.title, 'Filter by user');
    assert.equal(props.options.length, 1);
    assert.isUndefined(props.selectedOption);
  });

  it('should render the filter with a selected option if a user filter is applied', () => {
    fakeUseUserFilterOptions.returns([
      { display: 'One User', value: 'oneuser' },
    ]);
    fakeStore.getFilter
      .withArgs('user')
      .returns({ display: 'One User', value: 'oneuser' });

    const wrapper = createComponent();

    assert.deepEqual(
      wrapper.find('FilterSelect').at(1).props().selectedOption,
      {
        display: 'One User',
        value: 'oneuser',
      },
    );
  });

  it('should set a user filter when a user is selected', () => {
    fakeUseUserFilterOptions.returns([
      { display: 'One User', value: 'oneuser' },
    ]);

    const wrapper = createComponent();

    wrapper
      .find('FilterSelect')
      .at(1)
      .props()
      .onSelect({ display: 'One User', value: 'oneuser' });

    assert.calledOnce(fakeStore.setFilter);
    assert.calledWith(
      fakeStore.setFilter,
      'user',
      sinon.match({ display: 'One User', value: 'oneuser' }),
    );
  });
});
