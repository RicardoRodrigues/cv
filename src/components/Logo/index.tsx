import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Holder = styled.i`
  color: ${theme.palette.text.secondary};
  ${theme.typography.h1};
  ${theme.fontFamily.logo};
`;

interface IProps {
  className?: string;
}

const Logo: FC<IProps> = ({className}) => (
  <Holder className={className}>R</Holder>
);

export default Logo;
