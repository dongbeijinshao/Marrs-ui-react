// import SvgIcon from '../marrs-ui/src/SvgIcon';

const SvgIcon = (props) => {
  const { children, viewBox = '0 0 24 24', ...other } = props;

  return (
    <svg
      style={{
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0
      }}
      focusable="false"
      viewBox={viewBox}
      {...other}
    >
      {children}
    </svg>
  );
};
export default SvgIcon;
