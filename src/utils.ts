import {keyframes, css} from 'styled-components';

export function fadeInBuilder(duration: number, delay = 0) {
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  return css`
    opacity: 0;
    animation: ${fadeIn} ${duration}s ease-in-out forwards;
    animation-delay: ${delay}s;
  `;
}

export function fadeOutBuilder(duration: number, delay = 0) {
  const fadeIn = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;

  return css`
    opacity: 1;
    animation: ${fadeIn} ${duration}s ease-in-out forwards;
    animation-delay: ${delay}s;
  `;
}

export function expandBuilder(duration: number) {
  const expandModal = keyframes`
    from {
      transform: scale(1, 0);
    }
    to {
      transform: scale(1, 1);
    }
  `;

  return css`
    animation: ${expandModal} ${duration}s ease-in-out;
  `;
}
