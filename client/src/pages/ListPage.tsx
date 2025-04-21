import React, {
  useMemo,
  useState,
  useCallback,
  type ChangeEvent, useDeferredValue
} from 'react';
import useData from './useData';
import useSort from '../features/sort-items/useSort';
import {ItemsList} from '../widgets/items-list/items-list';
import {Subtitle} from '../shared/ui/subtitle/subtitle';
import {filterItems} from '../features/filter-items/utils';

function ListPage() {
  const items = useData();

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [query, setQuery] = useState<string>('');

  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    return filterItems(items, deferredQuery);
  }, [items, deferredQuery]);

  const [sortedItems, sortBy, handleSortClick] = useSort(filteredItems);

  const deferredSortBy = useDeferredValue(sortBy);

  const isLoading = query !== deferredQuery || sortBy !== deferredSortBy;

  const activeItemText = useMemo(() => typeof activeItemId === 'number' ? activeItemId : 'Empty', [activeItemId]);

  const handleItemClick = useCallback((id: number) => {
    setActiveItemId(id);
  }, []);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  return (
    <div className={'list-wrapper'}>
      <div className="list-header">
        <h1 className={'list-title'}>Items List</h1>

        <Subtitle text={String(activeItemText)}/>

        <button disabled={isLoading} onClick={handleSortClick}>Sort ({deferredSortBy === 'ASC' ? 'ASC' : 'DESC'})</button>
        <input type="text" placeholder={'Filter by ID'} value={query} onChange={handleQueryChange}/>

        {isLoading && <span>Updating results...</span>}
      </div>

      <ItemsList items={sortedItems}
                 activeItemId={activeItemId}
                 handleItemClick={handleItemClick}
      />
    </div>
  );
}

export default ListPage;
