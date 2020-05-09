import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {cover} from 'polished';
import Logo from '../Logo';
import {fadeInBuilder, fadeOutBuilder} from '../../utils';

interface IHolder {
  isLoading: boolean;
}
const Holder = styled.div<IHolder>`
  position: relative;
  ${({isLoading}) => isLoading ? fadeInBuilder(3) : fadeOutBuilder(2)}
`;


const LogoWithAnimation = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${cover()}
`;

interface IProps {
  className?: string;
  fadeOutTime: number;
  showLogo?: boolean;
  onLoaded?: () => void;
  onAnimationEnd?: () => void;
}

const Loader: FC<IProps> = ({className, fadeOutTime, onLoaded, onAnimationEnd}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      onLoaded && onLoaded();
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        onAnimationEnd && onAnimationEnd();
      }, fadeOutTime);
    }
  }, [isLoading]);

   return <Holder className={className} isLoading={isLoading}><LogoWithAnimation /></Holder>;

};

export default Loader;
