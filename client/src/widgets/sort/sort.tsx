import {SortButton} from '../../features/sort-items/ui/sort-button/sort-button';
import useSort from '../../features/sort-items/useSort';
import {FC} from 'react';
import {IItem} from '../../entities/item/model/types';

interface IProps {
  items: IItem[];
}

export const Sort: FC<IProps> = ({items}) => {
  const [sortedItems, sortBy, handleSortClick] = useSort(items);

  return <SortButton title={sortBy} handleSortClick={handleSortClick} />;
};
