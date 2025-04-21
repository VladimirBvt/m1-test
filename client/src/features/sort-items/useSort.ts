import { useMemo, useState } from 'react';
import {IItem} from '../../entities/item/model/types';

function useSort(items: IItem[]): readonly [IItem[], string, () => void] {
	const [sortBy, setSortBy] = useState('ASC');

	const sortedItems = useMemo(() => {
    if (!items) {
      return [];
    }

    items.sort((a, b) => {
      const compareResult = a.id - b.id;
      return sortBy === 'ASC' ? compareResult : -compareResult;
    });

    return items;
	}, [items, sortBy]);

	const handleSortClick = () => {
		if (sortBy === 'ASC') {
      setSortBy('DESC');
    } else  {
      setSortBy('ASC');
    }
	}

	return [sortedItems, sortBy, handleSortClick] as const
}

export default useSort;
