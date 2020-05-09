import React, {FC} from 'react';
import styled from 'styled-components';
import * as FontAwesome from 'react-icons/fa';
import theme from '../../theme';

export interface IProps {
  className?: string;
  iconName: keyof typeof FontAwesome;
  url: string;
}

const Link = styled.a`
  transition: 0.5s ease-in-out;
  font-size: 42px;
  color: ${theme.palette.text.primary};
  padding: ${theme.spacing(4)};
  &:hover {
    color: ${theme.palette.text.secondary};
  }
`;

const SocialIconLink: FC<IProps> = ({className, iconName, url}) => {
  const icon = React.createElement(FontAwesome[iconName]);
  return (
    <Link href={url} className={className} target="_blank" rel="noopener">
      {icon}
    </Link>
  );
}

export default SocialIconLink;
