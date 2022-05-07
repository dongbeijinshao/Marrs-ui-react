import { Link } from 'react-router-dom';
import { GROUP_NAV } from '@wemo-ui/marrs-docs/common/constants';
import { IconRightArrow } from '@wemo-ui/marrs-icons';
import { makeStyles } from '@wemo-ui/marrs/styles';
import { useTheme } from '@wemo-ui/marrs/styles';

import logo from '@wemo-ui/marrs-docs/common/image/logo.svg';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100vh',
    padding: `46px 20px 20px`,
    background: '#fff'
  },
  title: {
    margin: `0 0 16px`,
    fontSize: 32,
    paddingLeft: 16,
    fontWeight: 'normal',
    lineHeight: 1,
    userSelect: 'none'
  },
  logo: {
    width: 32
  },
  logoTitle: {
    marginLeft: 16
  },
  desc: {
    margin: `0 0 40px`,
    color: `rgba(69, 90, 100, 0.6)`,
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: 'normal',
    lineHeight: 1,
    userSelect: 'none'
  },
  group: {},
  groupTitle: {
    margin: `24px 0 8px 16px`,
    color: `rgba(69, 90, 100, 0.6)`,
    fontSize: 14
  },
  groupItem: {
    position: 'relative',
    display: 'flex',
    margin: `0 0 12px`,
    paddingLeft: 20,
    color: '#323233',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '40px',
    background: '#f7f8fa',
    borderRadius: 99,
    transition: `background 0.3s`,
    textDecoration: 'none',
    '&:hover': {
      background: '#eef0f4'
    }
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: 16,
    width: 16,
    height: 16,
    marginTop: -8
  }
});

const DocsHome = () => {
  const classes = useStyles();

  const navContent = GROUP_NAV.map((item, index) => (
    <div className={classes.group} key={`child-${index}`}>
      <div className={classes.groupTitle}>{item.groupName}</div>
      {item.children.map((child, key) => (
        <Link
          to={child.path}
          className={classes.groupItem}
          key={`child-${key}`}
        >
          {child.name}
          <IconRightArrow className={classes.icon} />
        </Link>
      ))}
    </div>
  ));
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        <img src={logo} alt="logo" className={classes.logo} />
        <span className={classes.logoTitle}>Marrs</span>
      </h1>
      <h2 className={classes.desc}>react移动端组件库</h2>
      {navContent}
    </div>
  );
};
export default DocsHome;
