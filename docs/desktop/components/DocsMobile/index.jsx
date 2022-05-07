import {
  GROUP_NAV,
  IS_DEV,
  MOBILE_PORT
} from '@wemo-ui/marrs-docs/common/constants';
import { makeStyles } from '@wemo-ui/marrs/styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const mobileRoute = GROUP_NAV.reduce((rs, item) => {
  return [...rs, ...item.children];
}, []);

const isMobileRoute = (path) => {
  return mobileRoute.some((child) => child.path === path);
};

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 88,
    right: 24,
    zIndex: 1,
    boxSizing: 'border-box',
    width: 375,
    minWidth: 360,
    overflow: 'hidden',
    background: '#fafafa',
    borderRadius: 20,
    boxShadow: `0 8px 12px #ebedf0`
  }
});

const getPrefix = () => {
  const domain = document.domain;
  return IS_DEV
    ? `${domain}:${MOBILE_PORT}`
    : domain.replace('marrs', 'marrs-mobile');
};

const rootWhitelist = ['/novice', '/quickstart', '/theme', '/styles'];

const showPath = (pathname) =>
  rootWhitelist.includes(pathname) ? '/' : pathname;

const DocsMobile = () => {
  const classes = useStyles();

  const { pathname } = useLocation();

  const [height, setHeight] = useState(640);

  const [style, setStyle] = useState();

  const [src, setSrc] = useState();

  useEffect(() => {
    const currentSrc = `http://${getPrefix()}${
      isMobileRoute(pathname) ? pathname : showPath(pathname)
    }`;
    setSrc(currentSrc);
  }, [pathname]);

  useEffect(() => {
    setStyle({ height, width: '100%' });
  }, [height]);

  useEffect(() => {
    const handleResize = () => {
      const height = Math.min(640, window.innerHeight - 90);
      setHeight(height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.root}>
      <iframe src={src} title="mobile" style={style} frameBorder="0" />
    </div>
  );
};
export default DocsMobile;
