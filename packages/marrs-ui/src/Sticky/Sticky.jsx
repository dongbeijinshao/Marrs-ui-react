import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useTheme } from '../styles';
import { customUtils, helperFunctions, useEventCallback } from '../utils';

const { noop } = helperFunctions;
const { getScrollTop } = customUtils;

const Sticky = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    children,
    zIndex = theme.zIndex.sticky,
    position = 'top',
    offset = 0,
    container = null,
    onChange = noop,
    ...other
  } = props;

  const rootRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [fixed, setFixed] = useState(false);

  const rootStyle = useMemo(() => {
    if (fixed) {
      return {
        width: `${width}px`,
        height: `${height}px`
      };
    }
  }, [fixed, width, height]);

  const stickyStyle = useMemo(() => {
    if (!fixed) {
      return;
    }
    return {
      position: 'fixed',
      width: `${width}px`,
      height: `${height}px`,
      zIndex: zIndex,
      [position]: offset,
      transform: `translateY(${translateY}px)`
    };
  }, [fixed, position, width, height, zIndex, offset, translateY]);

  const handleScroll = useEventCallback((event) => {
    const rootNode = rootRef.current;
    const rootRect = rootNode.getBoundingClientRect();
    setWidth(rootRect.width);
    setHeight(rootRect.height);
    const scrollTop = getScrollTop(window);
    if (position === 'top') {
      //在当前容器里固定在顶部
      if (container) {
        const containerNode = container.current;
        const containerRect = containerNode.getBoundingClientRect();
        const difference = containerRect.bottom - offset - height;
        setFixed(offset > rootRect.top && containerRect.bottom > 0);
        setTranslateY(Math.min(difference, 0));
      } else {
        setFixed(offset > rootRect.top);
      }
    } else {
      const { clientHeight } = document.documentElement;
      //在当前容器里固定在底部
      if (container) {
        const containerNode = container.current;
        const containerRect = containerNode.getBoundingClientRect();
        const difference = clientHeight - containerRect.top - offset - height;
        setFixed(
          clientHeight - offset < containerRect.bottom &&
            clientHeight > rootRect.top
        );
        setTranslateY(difference < 0 ? -difference : 0);
      } else {
        setFixed(clientHeight - offset < rootRect.bottom);
      }
    }
    onChange(event, scrollTop);
  });

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  //初始化的时候执行，使初始视图按规则排布
  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} style={rootStyle} {...other}>
      <div style={stickyStyle}>{children}</div>
    </div>
  );
});

export default Sticky;
