import {IItem} from '../../entities/item/model/types';

export const filterItems = (items: IItem[], filterString: string): IItem[] => {
  if (filterString.length > 0) {
    return items.filter(item => `${item.id}`.includes(filterString.toLowerCase().trimStart().trimEnd().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  } else {
    return items;
  }
};
