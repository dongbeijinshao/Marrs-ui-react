import { Link } from 'react-router-dom';
import { makeStyles } from '@wemo-ui/marrs/styles';
import { IconLeftArrow } from '@wemo-ui/marrs-icons';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#fff',
    fontSize: '16px'
  },
  hidden: {
    display: 'none'
  },
  title: {
    fontWeight: 600,
    fontSize: 17,
    textTransform: 'capitalize'
  },
  icon: {
    position: 'absolute',
    left: 16,
    cursor: 'pointer'
  }
});

const DocsNav = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${!title ? classes.hidden : ''}`}>
      <div className={classes.title}>{title}</div>
      <Link to="/" className={classes.icon}>
        <IconLeftArrow />
      </Link>
    </div>
  );
};
export default DocsNav;
