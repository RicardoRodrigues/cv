import React, {FC} from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import SkillBar from '../SkillBar';

interface IProps {
  className?: string;
  isOpen: boolean;
}

const Holder = styled.div`
  ${theme.typography.body};
  margin-bottom: 50px;
  text-align: justify;
  a {
    font-weight: bold;
    transition: .4s ease-in-out;
    color: ${theme.palette.button.secondary.normal};
    text-decoration: underline;
    &:hover {
      color: ${theme.palette.button.secondary.hover};
    }
  }
`;

const SkillBarHolder = styled(SkillBar)`
  margin-bottom: ${theme.spacing(3)};
`;

const SKILLS = [
  {
    id: 1,
    name: 'HTML',
    percentage: 90
  },
  {
    id: 2,
    name: 'CSS',
    percentage: 90
  },
  {
    id: 3,
    name: 'Javascript',
    percentage: 80
  },
  {
    id: 4,
    name: 'PHP',
    percentage: 60
  }
]

const About: FC<IProps> = ({className, isOpen}) => (
  <Holder className={className}>
    <p>I'm <strong>Ricardo</strong>, a <strong>Front End Developer</strong> and passionate for new emerging technologies. My strong persistence is one of the biggest strengths.</p>
    <p>Most of my life was spent in an Island on Atlantic Ocean, called <a href="http://en.wikipedia.org/wiki/Madeira" target="_blank">Madeira Island</a>, Island of flowers... or just look where <strong>Cristiano Ronaldo</strong> born.</p>
    <p>Travel is a must and know new people and cultures. Can't wait for a swimm in some nice beach and sun (What happen when you grow near the sea). Love to practice Basketball and Football.</p>

    As a passionate front-end developer, I prefer to run my own business rather than routine office work.
    Such lifestyle helps me enjoy my favourite hobbie –  . Being able to do your job in every corner of our planet is amazing!
    Graphic design is also my passion! Mostly because it helps me to overcome my emotions and show people part of my world. I’m looking forward to work with designers and creative experts who are as inspired and enthusiastic as I am.

    <h5>Skills</h5>
    {SKILLS.map(({id, name, percentage}) => (
      <SkillBarHolder key={id} name={name} percentage={percentage} isVisible={isOpen}/>
    ))}
  </Holder>
)

export default About;
