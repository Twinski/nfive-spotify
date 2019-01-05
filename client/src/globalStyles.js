import { injectGlobal, css } from 'styled-components';
import normalize from 'styled-normalize';


let animationDelays = '';
for (let i = 0; i <= 100; i += 1) {
    let delay = i * 25;
    animationDelays += `
      .anim-delay-${delay} {
        animation-delay: ${delay}ms;
      }
    `
}

let animationSlideUps = '';
for (let i = 0; i <= 100; i += 1) {
    let offsetY = i * 5;
    animationSlideUps += `
      @keyframes slideUpKeyframes${offsetY} {
        0%   { transform: translate(0, ${offsetY}px); opacity: 0; }
        100% { transform: translate(0, 0); opacity: 1; }
      }
      .anim-slide-up-${offsetY} {
        opacity: 0;
        animation: slideUpKeyframes${offsetY} 500ms cubic-bezier(0.010, 0.785, 0.300, 0.995);
        animation-fill-mode: forwards;
      }
    `
}

injectGlobal`
  ${normalize};
  html, body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  p {
    font-size: 12px;
  }

  //////////// ANIMATIONS ////////////

  @keyframes scaleInAnim {
    0%   { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }  
  @keyframes slideUpAnim {
    0%   { transform: translate(0, 200px); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }
  @keyframes slideUpAnim {
    0%   { transform: translate(0, 200px); opacity: 0; }
    100% { transform: translate(0, 0); opacity: 1; }
  }  
  @keyframes strokeanim {
    0% {
      stroke-dasharray: 1, 300;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 120, 300;
      stroke-dashoffset: -100 / 3;
    }
    100% {
      stroke-dasharray: 120, 300;
      stroke-dashoffset: -100;
    }
  }  
  @keyframes contanim {
    100% {
      transform: rotate(360deg)
    }
  }
  
  .anim-scale-in {
    opacity: 0;
    transform: scale(0.5);
    animation: scaleInAnim 500ms cubic-bezier(0.010, 0.785, 0.300, 0.995);
    animation-fill-mode: forwards;
  }

  .anim-slide-up {
    opacity: 0;
    animation: slideUpAnim 500ms cubic-bezier(0.010, 0.785, 0.300, 0.995);
    animation-fill-mode: forwards;
  }

  .anim-slide-up-subtle {
    opacity: 0;
    animation: slideUpAnim 500ms cubic-bezier(0.010, 0.785, 0.300, 0.995);
    animation-fill-mode: forwards;
  }

  ${animationSlideUps}

  ${animationDelays}
`;