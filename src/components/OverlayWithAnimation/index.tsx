import React, { FC } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import theme from '../../theme';
import ArrowButton from '../ArrowButton';


const HolderWithAnimation = styled(Animated)`
  background: ${theme.palette.background.terciary};
  width: 90vw;
  height: 90vh;
  padding: 5vh 5vw;
  z-index: 9;
  position: fixed;
  max-height: 100vh;
  overflow-y: auto;
`;


interface IProps {
  className?: string;
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

const OverlayWithAnimation: FC<IProps> = ({className, children, title, isVisible, onClose}) => (
  <HolderWithAnimation
    className={className}
    animationIn="slideInLeft"
    animationOut="slideOutLeft"
    animationInDuration={1000}
    animationOutDuration={1000}
    isVisible={isVisible}
    animateOnMount={false}
  >
    <ArrowButton direction="Left" onClick={onClose} />
    <h3>{title}</h3>
    {children}
  </HolderWithAnimation>
);

export default OverlayWithAnimation;
