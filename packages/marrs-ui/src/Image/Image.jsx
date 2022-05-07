import { IconLoading } from '@wemo-ui/marrs-icons';
import clsx from 'clsx';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import Icon, { IconItem } from '../Icon';
import ImageBase from '../ImageBase';
import { useTheme } from '../styles';
import styled from '../styles/styled';
import { getComponentName } from '../styles/topSet';
import useThemeProps from '../styles/useThemeProps';
import { generateShouldForwardProp } from '../utils';
import { noop } from '../utils/helperFunctions';
import { composeClassesByName } from '../utils/utilityClasses';
import imageClasses from './ImageClasses';

const ComponentName = getComponentName('Image');
const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;

  // 子元素
  const slots = {
    root: ['root'],
    cover: ['cover'],
    img: ['img']
  };

  // 合并自定义类名(className)
  const composedClasses = composeClassesByName(ComponentName, slots, classes);

  return {
    ...classes,
    ...composedClasses
  };
};

const ImageContainer = styled('div', {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp()
})(({ theme, styleProps }) => {
  const { width, height } = styleProps.size || {};

  return {
    overflow: 'hidden',
    fontSize: 0,
    position: 'relative',
    width: theme.sizing(width || '100%'),
    height: theme.sizing(height || '100%'),
    borderRadius: theme.radius.create(styleProps.radius)
  };
});

const ImageObject = styled(ImageBase, {
  name: ComponentName,
  slot: 'Base'
})(({ theme, styleProps }) => ({
  display: 'inline',
  position: 'relative',
  zIndex: 1,
  transition: theme.transitions.create(['opacity']),
  ...(!styleProps.loaded && {
    opacity: 0
  }),
  width: '100%',
  height: '100%',
  ...(!styleProps.origin && {
    objectFit: styleProps.fit || 'cover'
  })
}));

const ImageCover = styled('div', {
  name: ComponentName,
  slot: 'Cover'
})(({ theme }) => ({
  display: 'flex',
  fontSize: theme.sizing(theme.typography.fontSize),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  height: '100%',
  width: '100%',
  background: theme.palette.grey[100],
  [`&.${imageClasses.hidden}`]: {
    display: 'none'
  }
}));

const Image = forwardRef(function Image(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {}
  });
  const theme = useTheme();

  const {
    disabled = false,
    fallback,
    className,
    classes: classesProps,
    fit,
    src,
    size,
    loading,
    onLoad = noop,
    origin,
    radius = 0,
    ...other
  } = props;

  // 样式相关的属性
  const standardStyleProps = {
    origin,
    disabled,
    fit,
    size,
    radius,
    className,
    classes: classesProps
  };

  const classes = useUtilityClasses(standardStyleProps);

  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [styleProps, setStyleProps] = useState(standardStyleProps);
  useEffect(() => {
    if (!origin) {
      setStyleProps({
        ...styleProps,
        size: size
      });
    }
  }, [size]);
  const handleImageLoaded = useCallback((e) => {
    const { naturalHeight, naturalWidth } = e.target;
    if (origin) {
      setStyleProps({
        ...styleProps,
        size: { width: naturalWidth, height: naturalHeight }
      });
    }
    setLoaded(true);
    setFailed(false);
    onLoad(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageError = useCallback(() => {
    setFailed(true);
    setLoaded(true);
  }, []);

  const loadingBlock = loading;

  const showCover = failed || !loaded;
  return (
    <ImageContainer
      styleProps={styleProps}
      disabled={disabled}
      className={clsx(classes.root, className)}
    >
      <ImageObject
        className={classes.img}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        styleProps={{ ...styleProps, loaded }}
        ref={ref}
        src={src}
        {...other}
      />
      <ImageCover
        // style={!showCover ? { ...{ display: 'none' } } : {}}
        className={clsx(classes.cover, !showCover ? imageClasses.hidden : '')}
      >
        {/* 如果 fallback 是 boolean 类型，渲染固定的错误图片，或者是直接传入节点渲染 */}
        {failed && fallback === true ? (
          <IconItem
            icon={<Icon spin icon={<IconLoading />} />}
            color={theme.palette.grey[300]}
          />
        ) : (
          fallback
        )}
        {!loaded && loadingBlock === true ? (
          <Icon spin icon={<IconLoading />} />
        ) : (
          loadingBlock
        )}
      </ImageCover>
    </ImageContainer>
  );
});
Image.displayName = ComponentName;
Image.name = ComponentName;
export default Image;
