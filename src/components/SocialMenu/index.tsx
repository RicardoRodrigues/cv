import React, {FC} from 'react';
import styled from 'styled-components';
import SocialIconLink,  {IProps as ISocialIconLinkProps} from '../SocialIconLink';
import theme from '../../theme';

interface IProps {
  className?: string;
}

interface ISocialData {
  url: string;
  icon: ISocialIconLinkProps['iconName']
}

//TODO: Move to data layer
const SOCIAL_DATA = [
  {
    url: 'https://github.com/RicardoRodrigues',
    icon: 'FaGithub'
  },
  {
    url: 'https://twitter.com/r11rodrigues',
    icon: 'FaTwitter'
  },
  {
    url: 'mailto:ricardo@rodriguez.pt',
    icon: 'FaEnvelope'
  }
] as ISocialData[];


const Holder = styled.div`
  display: inline-flex;
  text-align: center;
`;

const SocialIconLinkHolder = styled(SocialIconLink)`
  margin: ${theme.spacing(4)} ${theme.spacing(6)};
`;

const SocialMenu: FC<IProps> = ({className}) => (
  <Holder className={className}>
    {SOCIAL_DATA.map(({icon, url}) =>
      <SocialIconLinkHolder key={icon} iconName={icon} url={url} />
    )}
  </Holder>
)

export default SocialMenu;
