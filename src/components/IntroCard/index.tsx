import React, {FC} from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface IProps {
  className?: string;
  name?: string;
  description?: string;
}

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const NameLabel = styled.span`
  color: ${theme.palette.text.secondary};
  ${theme.fontFamily.logo};
`;

const Title = styled.h1`
  margin: ${theme.spacing(4)} 0 ${theme.spacing(2)};
`;

const Description = styled.h3`
  margin: 0;
`;

const IntroCard: FC<IProps> = ({className, name, description}) => (
  <Holder className={className}>
    <Title>I'm <NameLabel>{name}</NameLabel></Title>
    <Description>{description}</Description>
  </Holder>
)

export default IntroCard;
