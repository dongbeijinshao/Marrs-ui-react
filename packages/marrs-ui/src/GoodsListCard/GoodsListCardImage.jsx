import clsx from 'clsx';
import { forwardRef, useContext } from 'react';
import Can from '../Can';
import Image from '../Image';
import Tag from '../Tag';
import Text from '../Text';
import { styled, useThemeProps } from '../styles';
import { alpha } from '../dependencies/system';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsListCardContext from './GoodsListCardContext';

export const ComponentName = getComponentName('GoodsListCardImage');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root']
  };

  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return composedClasses;
};

const GoodsListCardImageRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(({ theme, styleProps: { ratio } }) => {
  return {
    zIndex: 9,
    flexShrink: 0,
    width: theme.sizing(112),
    height: `calc(${theme.sizing(112)} / ${ratio})`,
    position: 'relative'
  };
});

const GoodsListCardImageCover = styled('div', {
  name: ComponentName,
  slot: 'Cover',
  shouldForwardProp: generateShouldForwardProp({})
})(({ theme }) => {
  return {
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    zIndex: 11,
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});

const GoodsListCardImageCoverCycle = styled(Can, {
  name: ComponentName,
  slot: 'cover-cycle',
  shouldForwardProp: generateShouldForwardProp({})
})(({ theme }) => {
  return {
    background: alpha(theme.palette.grey[900], 0.8),
    textAlign: 'center',
    color: '#fff',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
});

const GoodsListCardImageTags = styled('div', {
  name: ComponentName,
  slot: 'image-tags'
})(() => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10
  };
});

const GoodsListCardImage = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsListCardContext);

  const { ...inheritProps } = parentContext;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      src: inheritProps.image,
      tags: inheritProps.tags,
      ratio: inheritProps.ratio,
      coverInfo: inheritProps.coverInfo,
      disabled: inheritProps.disabled
    }
  });

  const {
    className,
    src = '',
    tags = [],
    ratio,
    disabled,
    coverInfo,
    ...other
  } = props;

  const styleProps = {
    ratio
  };
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsListCardImageRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      radius={2}
      ref={ref}
      {...other}
    >
      {(coverInfo || disabled) && (
        <GoodsListCardImageCover>
          {!disabled && (
            <GoodsListCardImageCoverCycle
              size={{ width: 70, height: 70 }}
              circle
            >
              <Text
                sx={{
                  color: '#fff',
                  fontSize: (theme) => {
                    return theme.sizing(13);
                  }
                }}
              >
                {coverInfo.title}
              </Text>
              <Text
                sx={{
                  color: '#fff',
                  fontSize: (theme) => {
                    return theme.sizing(8);
                  }
                }}
              >
                {coverInfo.subTitle}
              </Text>
            </GoodsListCardImageCoverCycle>
          )}
        </GoodsListCardImageCover>
      )}

      <Image
        src={src}
        fit="cover"
        className={classes.image}
        sx={{ left: 0, top: 0 }}
      />
      <GoodsListCardImageTags>
        {tags.map((tag, idx) => {
          return (
            <Tag
              key={idx}
              radius={[2, 0, 2, 0]}
              sx={{
                margin: 0,
                top: (theme) => theme.sizing(-1),
                fontSize: (theme) => theme.sizing(10)
              }}
            >
              {tag}
            </Tag>
          );
        })}
      </GoodsListCardImageTags>
    </GoodsListCardImageRoot>
  );
});

GoodsListCardImage.displayName = ComponentName;
GoodsListCardImage.name = ComponentName;
export default GoodsListCardImage;
