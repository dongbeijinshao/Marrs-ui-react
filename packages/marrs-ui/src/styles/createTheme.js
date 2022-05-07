import { deepmerge } from '@wemo-ui/marrs-core/utils';
import { generateUtilityClass } from '../dependencies/utilityClasses';
import assert from '../utils/assert';
import createAnimation from './createAnimation';
import createBorder from './createBorder';
import createPalette from './createPalette';
import createRadius from './createRadius';
import createSizing from './createSizing';
import createSpacing from './createSpacing';
import createTransitions from './createTransitions';
import createTypography from './createTypography';
import defaultComponentConfig from './defaultComponentConfig';
import defaultGlobalProps from './defaultGlobalProps';
import shadows from './shadows';
import zIndex from './zIndex';

const mainTheme = {
  globalProps: defaultGlobalProps,
  components: defaultComponentConfig
};

function createTheme(inputOption = {}, ...args) {
  const {
    steps: stepsInput = {},
    sizingMode: sizingModeInput = 'px',
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    animation: animationInput = {},
    // spacing,
    // radius,
    ...other
  } = deepmerge(mainTheme, inputOption);

  const palette = createPalette(paletteInput);

  const sizingFunction = createSizing({
    mode: sizingModeInput,
    innerWidth: window.innerWidth
  });

  let thisTheme = deepmerge(
    {},
    {
      palette,
      shadows,
      steps: stepsInput,
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      radius: createRadius({ step: stepsInput.radius }, sizingFunction),
      animation: createAnimation(animationInput),
      spacing: createSpacing({ step: stepsInput.spacing }, sizingFunction),
      zIndex: { ...zIndex },
      sizing: sizingFunction,
      createBorder: createBorder
    }
  );

  thisTheme = deepmerge(thisTheme, other);
  thisTheme = args.reduce(
    (acc, argument) => deepmerge(acc, argument),
    thisTheme
  );

  if (process.env.NODE_ENV !== 'production') {
    const pseudoClasses = [
      'active',
      'checked',
      'disabled',
      'error',
      'focused',
      'focusVisible',
      'required',
      'expanded',
      'selected'
    ];

    const traverse = (node) => {
      let key;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (key in node) {
        const child = node[key];
        if (
          pseudoClasses.indexOf(key) !== -1 &&
          Object.keys(child).length > 0
        ) {
          const pseudoClass = generateUtilityClass('', key);
          assert(
            false,
            [
              `不要直接使用内置通用类名\`${key}\``,
              `想达到同样效果可以这么写`,
              JSON.stringify(
                {
                  root: {
                    [`&.${pseudoClass}`]: child
                  }
                },
                null,
                2
              )
            ].join('\n')
          );
          // 强制移除
          node[key] = {};
        }
      }
    };

    Object.keys(thisTheme.components).forEach((component) => {
      const styleOverrides = thisTheme.components[component].styleOverrides;

      if (styleOverrides && component.indexOf('Marrs') === 0) {
        traverse(styleOverrides, component);
      }
    });
  }

  return thisTheme;
}

export default createTheme;
