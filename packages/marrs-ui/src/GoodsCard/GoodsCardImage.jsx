import clsx from 'clsx';
import { forwardRef, useContext } from 'react';
import Can from '../Can';
import Image from '../Image';
import Tag from '../Tag';

import { styled, useThemeProps } from '../styles';
import { getComponentName } from '../styles/topSet';
import { generateShouldForwardProp } from '../utils';
import { composeClassesByName } from '../utils/utilityClasses';
import GoodsCardContext from './GoodsCardContext';

export const ComponentName = getComponentName('GoodsCardImage');

const useUtilityClasses = (styleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClassesByName(ComponentName, slots, classes);
  return composedClasses;
};

const GoodsCardImageRoot = styled(Can, {
  name: ComponentName,
  slot: 'Root',
  shouldForwardProp: generateShouldForwardProp({
    include: ['classes']
  })
})(({ theme, styleProps }) => {
  return {
    zIndex: 9,
    flexShrink: 0,
    width: `calc(50vw - ${theme.sizing(18)})`,
    height: `calc((50vw - ${theme.sizing(18)}) / ${styleProps.ratio})`,
    position: 'relative'
  };
});

const GoodsCardImageTags = styled('div', {
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

const GoodsCardImage = forwardRef((inProps, ref) => {
  const parentContext = useContext(GoodsCardContext);

  const { ...inheritProps } = parentContext;

  const props = useThemeProps({
    props: inProps,
    name: ComponentName,
    customProps: {
      src: inheritProps.image,
      ratio: inheritProps.ratio,
      tags: inheritProps.tags
    }
  });

  const { className, src = '', ratio, tags = [], ...other } = props;

  const styleProps = {
    ratio
  };
  const classes = useUtilityClasses(styleProps);

  return (
    <GoodsCardImageRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <Image src={src} fit="cover" loading className={classes.image} />
      <GoodsCardImageTags>
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
      </GoodsCardImageTags>
    </GoodsCardImageRoot>
  );
});

GoodsCardImage.name = ComponentName;
export default GoodsCardImage;
