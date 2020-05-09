import React, {FC} from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../../theme';

interface IProps {
  className?: string;
  name: string;
  percentage: number;
  isVisible?: boolean;
}

const Holder = styled.div``;

const Label = styled.div`
  ${theme.typography.small}
  margin-bottom: ${theme.spacing(1)}
`;

const Progress = styled.div`
  padding: 4px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`;

interface IProgressBar {
  width: string;
  isVisible: boolean;
}

const ProgressBar = styled.div<IProgressBar>`
  width: ${({width, isVisible}) => isVisible ? width : 0};
  height: 16px;
  border-radius: 4px;
  background-color: #9ACD32;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.7s ease-in-out;
  transition-delay: 0.5s;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}
`;

const SkillBar: FC<IProps> = ({className, name, percentage, isVisible = true}) => (
  <Holder className={className}>
    <Label>{name}</Label>
    <Progress>
      <ProgressBar width={`${percentage}%`} isVisible={isVisible}/>
    </Progress>
  </Holder>
)

export default SkillBar;
