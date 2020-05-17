import React, {FC} from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import FolioCard from '../FolioCard';

interface IProps {
  className?: string;
}

const Holder = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;


const Folio: FC<IProps> = ({className}) => (
  <Holder className={className}>
    <FolioCard id={8}/>
    <FolioCard id={7}/>
    <FolioCard id={1}/>
    <FolioCard id={2}/>
  </Holder>
)

export default Folio;
