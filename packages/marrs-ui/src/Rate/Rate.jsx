import { IconStar, IconStarSolid } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import React from 'react';
import { useTheme } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { useForkRef } from '../utils';
import { noop } from '../utils/helperFunctions';
import {
  composeClassesByName,
  normalizeClasses
} from '../utils/utilityClasses';

const ComponentName = getComponentName('Rate');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    ...normalizeClasses('box', 'iconCom', 'halfIcon')
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const defaultIcon = <IconStarSolid />;
const defaultEmptyIcon = <IconStar />;

const roundValueToPrecision = (percent, num) => {
  const val = (percent * num).toFixed(1);
  const dot = val % 1;
  const result = dot > 0.5 ? Math.ceil(val) : Math.floor(val) + 0.5;
  return Math.min(Math.max(0, result), num);
};

const RateRoot = styled('span', {
  name: ComponentName,
  slot: 'Root'
})(({ theme, styleProps }) => {
  return {
    touchAction: 'none',
    display: 'inline-flex',
    position: 'relative',
    // ...(styleProps.size && {
    fontSize: theme.sizing(18),
    // }),
    color: theme.palette.getColor(styleProps.color).color(),
    textAlign: 'left',
    ...(styleProps.disabled && {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }),
    ...(styleProps.readonly && {
      pointerEvents: 'none'
    })
  };
});
const RateBox = styled('span', {
  name: ComponentName,
  slot: 'Box'
})(({ styleProps }) => ({
  position: 'relative',
  marginRight: styleProps.gap
}));

const RateIcon = styled('span', {
  name: ComponentName,
  slot: 'Icon'
})(({ theme, styleProps }) => ({
  display: 'flex',
  // fontSize: 18,
  ...(styleProps.iconEmpty && {
    color: styleProps.emptySolid
      ? theme.palette.grey[300]
      : theme.palette.action.disabled
  }),
  ...(styleProps.isHalf && {
    position: 'absolute',
    top: 0,
    width: '50%',
    overflow: 'hidden'
  })
}));

function RateItem(props) {
  const {
    emptySolid,
    itemValue,
    rateValue,
    icon,
    emptyIcon,
    styleProps,
    classes
  } = props;

  const isFilled = itemValue <= rateValue;
  const isHalf = rateValue % 1 !== 0;

  const IconCom = (
    <RateIcon
      className={classes.iconCom}
      styleProps={{
        iconEmpty: !isFilled,
        emptySolid: emptySolid
      }}
    >
      {emptyIcon && !isFilled ? emptyIcon : icon}
    </RateIcon>
  );
  const HalfIcon = (
    <RateIcon
      className={classes.halfIcon}
      styleProps={{
        iconEmpty: false,
        isHalf: isHalf,
        emptySolid: emptySolid
      }}
    >
      {icon}
    </RateIcon>
  );

  return (
    <RateBox styleProps={styleProps} className={classes.box}>
      {IconCom}
      {isHalf && itemValue === Math.ceil(rateValue) ? HalfIcon : ''}
    </RateBox>
  );
}

const Rate = React.forwardRef(function Rate(inProps, ref) {
  const props = useThemeProps({
    name: ComponentName,
    props: inProps
  });
  const theme = useTheme();

  const {
    className,
    disabled = false,
    emptySolid,
    emptyIcon = emptySolid ? defaultIcon : defaultEmptyIcon,
    icon = defaultIcon,
    num = 5,
    gap = 12,
    color = 'primary',
    onChange = noop,
    readonly = false,
    value,
    classes: classesProps,
    ...other
  } = props;

  const styleProps = {
    color,
    readonly,
    disabled,
    gap,
    emptySolid,
    classes: classesProps
  };

  const [valueDerived, setValueDerived] = React.useState(value);
  const rootRef = React.useRef();
  const handleRef = useForkRef(ref, rootRef);

  const handleChange = React.useCallback(
    (event) => {
      requestAnimationFrame(() => {
        const clientX = event.clientX || event.touches[0].clientX;
        const rootNode = rootRef.current;
        const { right, left } = rootNode.getBoundingClientRect();
        const { width } = rootNode.firstChild.getBoundingClientRect();
        let percent;
        if (theme.direction === 'rtl') {
          percent = (right - clientX) / (width * num + gap * (num - 1));
        } else {
          percent = (clientX - left) / (width * num + gap * (num - 1));
        }
        const cur = roundValueToPrecision(percent, num);
        setValueDerived(cur);
        // onTouchMove(event);
        onChange(event, cur);
      });
    },
    [rootRef, theme, setValueDerived, onChange, gap, num]
  );

  const classes = useUtilityClasses(styleProps);

  return (
    <RateRoot
      className={clsx(classes.root, className)}
      ref={handleRef}
      onTouchMove={handleChange}
      onClick={handleChange}
      styleProps={styleProps}
      {...other}
    >
      {Array.from(new Array(num)).map((_, index) => {
        const itemValue = index + 1;
        const rateItemProps = {
          rateValue: valueDerived,
          styleProps,
          emptyIcon,
          emptySolid,
          icon,
          classes
        };
        return (
          <RateItem key={itemValue} {...rateItemProps} itemValue={itemValue} />
        );
      })}
    </RateRoot>
  );
});

Rate.displayName = ComponentName;
Rate.name = ComponentName;

export default Rate;
