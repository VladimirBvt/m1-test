import type {IItem} from '../../entities/item/model/types';
import type {FC} from 'react';
import {ListItem} from '../../pages/components';

interface IProps {
  items: IItem[]
  activeItemId: number | null
  handleItemClick: (id: number) => void
}

export const ItemsList: FC<IProps> = ({items, activeItemId, handleItemClick}) => {
  return (
    <div className="list-container">
      <div className="list">
        {items.length === 0 && <span>Loading...</span>}

        {items.map((item, index) => (
          <ListItem
            key={item.id}
            isActive={activeItemId === item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};
