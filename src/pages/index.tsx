import React, { FC, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import {transparentize} from 'polished';
import useComponentSize from '@rehooks/component-size';
import { cover } from 'polished';
import theme from '../theme';
import { fadeInBuilder } from '../utils';
import Layout from '../components/Layout';
import IntroCard from '../components/IntroCard';
import Loader from '../components/Loader';
import SocialMenu from '../components/SocialMenu';
import OverlayWithAnimation from '../components/OverlayWithAnimation';
import About from '../components/About';
import PageButton from '../components/PageButton';

const LoaderOverlay = styled(Loader)`
  ${cover()}
`;

const FadeIn = styled.div`
  ${fadeInBuilder(2)}
`;

const SocialMenuHolder = styled(SocialMenu)`
  width: 100%;
  justify-content: center;
  margin-top: ${theme.spacing(4)};
`;

const Middle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 1;
`;

enum MenuType {
  About = 'about',
  Portfolio = 'portfolio',
}

const Menu = styled.div`
  margin-top: 6vh;
`;


const Home: FC = () => {
  const holderRef = useRef(null);
  const { width: holderWidth } = useComponentSize(holderRef);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<MenuType|null>(null);
  const [hasAnimationEnd, setHasAnimationEnd] = useState(false);
  const isSmall = holderWidth < theme.breakpoints.sm;

  return (
    <div ref={holderRef}>
      {!hasAnimationEnd && (
        <LoaderOverlay
          fadeOutTime={3000}
          onLoaded={() => setIsLoaded(true)}
          onAnimationEnd={() => setHasAnimationEnd(true)}
        />
      )}
      <Layout>
        {isLoaded && hasAnimationEnd && (
          <FadeIn>
            <Middle>
              <IntroCard
                name="Ricardo Rodrigues"
                description="Front End Developer"
              />
              <SocialMenuHolder />
              <Menu>
                <PageButton placement="Left" onClick={() => setActiveOverlay(MenuType.About)}>About</PageButton>
                <PageButton placement="Right" onClick={() => setActiveOverlay(MenuType.Portfolio)}>Folio</PageButton>
              </Menu>
            </Middle>
            <OverlayWithAnimation
              title={'About'}
              isVisible={MenuType.About === activeOverlay}
              onClose={() => setActiveOverlay(null)}
            >
              <About isOpen={MenuType.About === activeOverlay}/>
            </OverlayWithAnimation>
          </FadeIn>
        )}
      </Layout>
    </div>
  );
};

export default Home;
