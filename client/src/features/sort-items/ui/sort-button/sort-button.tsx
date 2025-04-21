import {type FC} from 'react';

interface IProps {
  title: string;
  handleSortClick: () => void;
}

export const SortButton:FC<IProps> = ({title, handleSortClick}) => {
  return <button onClick={handleSortClick}>Sort ({title})</button>;
};
