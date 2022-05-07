import { makeStyles } from '@wemo-ui/marrs/styles';
import { Tag } from '@wemo-ui/marrs';
import { IS_DEV } from '@wemo-ui/marrs-docs/common/constants';
import logo from '@wemo-ui/marrs-docs/common/image/logo.svg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    userSelect: 'none',
    backgroundColor: '#fff',
    boxShadow: `0px 2px 4px 0px rgb(0 0 0 / 6%)`,
    position: 'fixed',
    zIndex: 999,
    top: 0
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    padding: `0 8px`
  },
  tag: {
    position: 'absolute',
    right: 16
  },
  img: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 28,
    marginRight: 12
  },
  title: {
    color: '#000',
    fontSize: 22,
    display: 'inline-block',
    verticalAlign: 'middle'
  }
});

const DocsHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" className={classes.img} />
          <span className={classes.title}>Marrs</span>
        </div>
        {IS_DEV && (
          <div className={classes.tag}>
            <Tag face="plain">Dev</Tag>
          </div>
        )}
      </div>
    </div>
  );
};
export default DocsHeader;
