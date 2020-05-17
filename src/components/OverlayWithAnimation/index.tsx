import React, { FC } from 'react';
import styled from 'styled-components';
import { Animated, AnimationString } from 'react-animated-css';
import theme from '../../theme';
import {breakpointsInPx} from '../../media';
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

const ContentHolder = styled.div`
  max-width: ${breakpointsInPx.lg};
  margin: auto;
`;

interface IProps {
  className?: string;
  title: string;
  isVisible: boolean;
  onClose: () => void;
  direction: 'Left' | 'Right';
}

const OverlayWithAnimation: FC<IProps> = ({className, children, title, isVisible, onClose, direction}) => (
  <HolderWithAnimation
    className={className}
    animationIn={`slideIn${direction}` as AnimationString}
    animationOut={`slideOut${direction}` as AnimationString}
    animationInDuration={1000}
    animationOutDuration={1000}
    isVisible={isVisible}
    animateOnMount={false}
  >
    <ContentHolder>
      <ArrowButton direction={direction} onClick={onClose} />
      <h3>{title}</h3>
      {children}
    </ContentHolder>
  </HolderWithAnimation>
);

export default OverlayWithAnimation;
