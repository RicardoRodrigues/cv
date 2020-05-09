import React, {FC} from 'react';
import styled from 'styled-components';
import * as FontAwesome from 'react-icons/fa';
import theme from '../../theme';

export interface IProps {
  className?: string;
  direction: 'Up' | 'Down' | 'Left' | 'Right';
  onClick: () => void;
}

const Button = styled.div`
  font-size: 42px;
  cursor: pointer;
  transition: color 0.4s ease-in-out;
  color: ${theme.palette.button.secondary.normal};
  &:hover {
    color: ${theme.palette.button.secondary.hover};
  }
`;

const ArrowButton: FC<IProps> = ({className, direction, onClick}) => {
  const iconName = `FaChevronCircle${direction}` as keyof typeof FontAwesome;
  const icon = React.createElement(FontAwesome[iconName]);
  return (
    <Button className={className} onClick={onClick}>
      {icon}
    </Button>
  );
}

export default ArrowButton;
