import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import theme from '../../theme';

interface IProps {
  className?: string;
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

const Holder = styled.article`
  position: relative;
  height: 0;
  padding-bottom: 65%;
  margin-bottom: 65px;
  display: block;
  box-sizing: border-box;
  background: white;
`;

//Experimental approach, using checkbox to toggle
const Input = styled.input`
  display: none;
`;

const ExpandButton = styled.label`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 20;
  width: 32px;
  height: 32px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  background: ${theme.palette.background.secondary};
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px white;

  div {
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 10px 5px;
  }

  span {
   display: block;
   position: absolute;
   height: 2px;
   width: 100%;
   background: ${theme.palette.text.terciary};
   border-radius: 2px;
   opacity: 1;
   left: 0;
   transform: rotate(0deg);
   transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 4px;
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: 8px;
    transform-origin: left center;
  }

  ${Input}:checked ~ & span:nth-child(1) {
    transform: rotate(45deg);
    top: -2.75px;
    left: 3px;
  }

  ${Input}:checked ~ & span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  ${Input}:checked ~ & span:nth-child(3) {
    transform: rotate(-45deg);
    top: 11px;
    left: 3px;
  }
`;

const Intro = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px 16px;
  margin: 0;
  z-index: 10;
  transition: all 0.3s;
  color: ${theme.palette.text.terciary};
  background-color: ${theme.palette.background.secondary};

  ${Input}:checked ~ & {
    padding: 10px 16px 10px 75px;
  }
`;

const ContentHolder = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  left: 8px;
  transition: all 0.3s;
`;

const Description = styled.div`
  position: absolute;
  top: 100%;
  right: 24px;
  left: 24px;
  bottom: 16px;
  overflow: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: all 1.2s;
  overflow-y: auto;
  font-size: 16px;

  h3 {
    font-size: 18px;
    margin-top: 0;
  }

  a {
    font-weight: bold;
    transition: .4s ease-in-out;
    color: ${theme.palette.button.secondary.normal};
    text-decoration: underline;
    &:hover {
      color: ${theme.palette.button.secondary.hover};
    }
  }

  p {
    text-align: justify;
  }

  ${Input}:checked ~ ${ContentHolder} & {
    top: 36px;
    opacity: 1;
    filter: alpha(opacity=100);
  }

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

const ImageHolder = styled.div<{backgroundImage: string}>`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.3s;
  ${({backgroundImage}) => backgroundImage && css`
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
  `}

  ${Input}:checked ~ ${ContentHolder} & {
    left: 0px;
    top: 100%;
    margin-top: 20px;
    width: 60px;
    height: 42px;
    z-index: 20;
  }
`;

const Chip = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
  background: rgba(0,0,0,0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.25), 0 1px rgba(255,255,255,0.08);
  margin-right: 4px;
`;


const FolioCard: FC<IProps> = ({className, id, title, description, imageUrl, skills}) => (
  <Holder className={className}>
    <Input id={`folio-${id}`} type="checkbox" />
    <ExpandButton htmlFor={`folio-${id}`}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </ExpandButton>
    <Intro>
      <strong>{title}</strong>
      <div>
        {skills.map(skill => 
          <Chip>
            {skill}
          </Chip>
        )}
      </div>
    </Intro>
    <ContentHolder>
      <ImageHolder backgroundImage={imageUrl} />
      <Description 
        dangerouslySetInnerHTML={{
        __html: description
        }}
      />
    </ContentHolder>
  </Holder>
)

export default FolioCard;
