import type {FC} from 'react';

interface IProps {
  text: string;
}

export const Subtitle: FC<IProps> = ({text}) => {
  return <h2 className={'list-subtitle'}>Active Item ID: {text}</h2>;
};
