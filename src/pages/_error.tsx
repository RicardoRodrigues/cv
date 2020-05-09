import React, {FC} from 'react';
import styled from 'styled-components';
import {cover} from 'polished';
import theme from '../theme';
import LayoutBase from '../components/Layout';

const Layout = styled(LayoutBase)`
  position: relative;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${cover()}
`;

const MainTitle = styled.div`
  font-size: 124px;
  letter-spacing: -7px;
  animation: glitch 1s linear infinite;
  color: ${theme.palette.text.secondary};

  @keyframes glitch{
    2%,64%{
      transform: translate(2px,0) skew(0deg);
    }
    4%,60%{
      transform: translate(-2px,0) skew(0deg);
    }
    62%{
      transform: translate(0,0) skew(5deg);
    }
  }

  &:before,
  &:after{
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before{
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop{
    2%,64%{
      transform: translate(2px,-2px);
    }
    4%,60%{
      transform: translate(-2px,2px);
    }
    62%{
      transform: translate(13px,-1px) skew(-13deg);
    }
  }

  &:after{
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom{
    2%,64%{
      transform: translate(-2px,0);
    }
    4%,60%{
      transform: translate(-2px,0);
    }
    62%{
      transform: translate(-22px,5px) skew(21deg);
    }
  }
`;

const Text = styled.h4`
  max-width: ${theme.breakpoints.xl}px;
  padding: 0 ${theme.spacing(4)};
  text-align: center;
`;

const NotFoundPage: FC = () => (
  <Layout>
    <Holder>
      <MainTitle title="404">404</MainTitle>
      <Text>
        You’ve found a Glitch!
        <br/>
        <br/>
        You’ve found yourself in a weird place. Probably not the one you were looking for ¯\_(ツ)_/¯
      </Text>
    </Holder>
  </Layout>
)

export default NotFoundPage;
