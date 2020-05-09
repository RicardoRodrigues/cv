import React, {FC} from 'react';
import styled from 'styled-components';
import {transparentize} from 'polished';
import theme from '../../theme';
import media from '../../media';

type PlacementType = 'Left' | 'Right';

export interface IProps {
  className?: string;
  placement: PlacementType;
  onClick: () => void;
}

const DIRECTION_STYLES = {
  Left: {
    left: 0,
    transform: 'rotate(-90deg)',
  },
  Right: {
    right: 0,
    transform: 'rotate(90deg)',
  }
}

interface IHolder {
  placement: PlacementType;
}

const Holder = styled.div<IHolder>`
  transition: .4s ease-in-out;
  transition-property: color, background;
  z-index: 4;
  font-size: 25px;
  display: inline-block;

  ${media.lessThan('sm')`
    padding: 0 6%;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      color: ${theme.palette.button.primary.hover};
    }
  `};

  ${({placement}) => media.greaterThan('sm')`
    width: 10vw;
    height: 10vw;
    text-transform: uppercase;
    text-align: center;
    background: transparent;
    position: absolute;
    bottom: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0px 0px 100px 100px;
    &:hover {
      background: ${transparentize(0.1, theme.palette.background.secondary)};
      color: ${theme.palette.text.terciary};
    }
    ${DIRECTION_STYLES[placement]}
  `};

  &:hover {
    cursor: pointer;
  }
`;

const PageButton: FC<IProps> = ({className, placement, onClick, children}) => {
  return (
    <Holder className={className} onClick={onClick} placement={placement}>
      {children}
    </Holder>
  );
}

export default PageButton;
