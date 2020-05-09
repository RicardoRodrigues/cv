import React, { FC } from 'react';
import styled from 'styled-components';
import {cover} from 'polished';
import ParticlesBase, {MoveDirection, OutMode, HoverMode, ClickMode} from 'react-particles-js';
import GlobalStyle from '../../GlobalStyle';
import Head from '../Head';
import theme from '../../theme';

const Particles = styled(ParticlesBase)`
  ${cover()}
  z-index: -1;
`;

interface IProps {
  isLoading?: boolean;
}

const Layout: FC<IProps> = ({children}) => (
  <>
    <Head />
    <GlobalStyle />
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: false
            }
          },
          color: {
            value: theme.palette.primary.main
          },
          size: {
            value: 4,
            random: true,
            anim: {
              speed: 3,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: MoveDirection.top,
            out_mode: OutMode.bounce
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: HoverMode.slow
            },
            onclick: {
              enable: true,
              mode: ClickMode.repulse
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 5,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 200,
              duration: 4
            }
          }
        }
      }}
    />
    {children}
  </>
);

export default Layout;
