import React, {type FC, memo, type MouseEvent, type ReactNode, useCallback} from 'react';

interface IProps {
  id: number
  disabled: boolean
  children: ReactNode
  onClick: (id: number) => void;
}

const Button: FC<IProps> = ({ onClick, id, disabled, children }) => {
	const handleClick = useCallback((id: number, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
		onClick(id);
	}, []);

	return (
		<button onClick={(e) => handleClick(id, e)} disabled={disabled}>{children}</button>
	)
}

export default memo(Button);
