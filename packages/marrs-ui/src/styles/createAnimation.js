/**
 * 创建动画库
 */

import { deepmerge } from '@wemo-ui/marrs-core/utils';

const generateAnimationName = (name) => {
  return `marrs-ui-animation-${name}`;
};

// TODO 替换为emotion keyframes 实现
const animations = {
  spin: {
    timingFunction: 'linear',
    duration: '1.5s',
    iterationCount: 'infinite',
    fillMode: 'both',
    keyframe: {
      [`@keyframes ${generateAnimationName('spin')}`]: {
        '0%': {
          transform: 'rotate(0)'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    }
  }
};

const createAnimation = (input) => {
  const create = (name, props = {}) => {
    const animation = animations[name];

    const {
      iterationCount = animation.iterationCount,
      timingFunction = animation.timingFunction,
      fillMode = animation.fillMode,
      duration = animation.duration
    } = props;

    if (!animation) return {};

    return {
      animation: `${duration} ${timingFunction} ${iterationCount} ${fillMode} ${generateAnimationName(
        name
      )}`,
      ...animations[name].keyframe
    };
  };

  return deepmerge({ create }, input);
};
export default createAnimation;
