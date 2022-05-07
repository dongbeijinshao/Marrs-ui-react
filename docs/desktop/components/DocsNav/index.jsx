import { NavLink } from 'react-router-dom';

import {
  BASE_NAV,
  GROUP_NAV
} from '@wemo-ui/marrs-docs/common/constants/index';

import { makeStyles } from '@wemo-ui/marrs/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    top: 60,
    bottom: 0,
    zIndex: 1,
    minWidth: 220,
    maxWidth: 220,
    padding: `24px 0`,
    overflowY: 'scroll',
    backgroundColor: '#fff',
    boxShadow: `0 8px 12px #ebedf0`,
    maxHeight: '100%'
  },
  group: {
    marginBottom: 16,
    paddingLeft: 6
  },
  title: {
    padding: `8px 0 8px 24px`,
    color: '#455a64',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: '28px'
  },
  item: {
    display: 'block',
    margin: `8px 0`,
    padding: `8px 0 8px 24px`,
    color: '#455a64',
    fontSize: 14,
    lineHeight: '20px',
    transition: `color .2s`,
    textDecoration: 'none',
    '&.active': {
      color: '#0270fe',
      background: `linear-gradient(267deg, rgba(240, 250, 255, 0) 0%, #f0faff 100%)`,
      fontWeight: 500,
      fontSize: 15,
      borderLeft: `3px solid #0270fe`
    }
  }
});

const navConfig = [...BASE_NAV, ...GROUP_NAV];

const DocsNav = () => {
  const classes = useStyles();

  const navContent = navConfig.map((item, index) => (
    <div className={classes.group} key={`child-${index}`}>
      <div className={classes.title}>{item.groupName}</div>
      {item.children.map((child, key) => (
        <NavLink to={child.path} className={classes.item} key={`child-${key}`}>
          {child.name}
        </NavLink>
      ))}
    </div>
  ));
  return <div className={classes.root}>{navContent}</div>;
};
export default DocsNav;
