import React from 'react';
import SvgIcon from '../SvgIcon';

const IconRecommend = React.forwardRef((inProps, ref) => {
  return (
    <SvgIcon ref={ref} {...inProps} viewBox="0 0 44 44">
      <path d="M8.5,38 C5.53652085,38 3.12046086,35.65622 3.0043672,32.7212071 L3,32.5 L3,19.5 C3,16.5365209 5.34378001,14.1204609 8.27879286,14.0043672 L8.5,14 L12.2586229,13.9998036 C12.7784448,12.8818107 13.4524488,11.8327423 14.2677973,10.885432 L14.5801535,10.5350246 L21.6519646,2.87389597 C23.1458927,1.2554738 25.5531121,0.869123907 27.4784644,1.93876409 C29.3541814,2.98082907 30.2303882,5.1902184 29.6036693,7.22150076 L29.5334544,7.43094292 L27.487,13.079 L35.8367073,13.030553 C38.7241492,13.0134523 41.1050719,15.2245175 41.3487397,18.0522153 L41.3635066,18.2767063 L41.3694541,18.4978837 C41.3714033,18.8663488 41.3365214,19.2338658 41.2652922,19.5949148 L41.205064,19.8644025 L38.0914103,32.3190172 C37.2775894,35.5743009 34.4054893,37.8822657 31.0725996,37.9956293 L30.8153416,38 L8.5,38 Z M11,19.691806 C11,18.7814694 11.0919707,17.8800908 11.2709995,17.0002348 L8.5,17 C7.1745166,17 6.08996133,18.0315359 6.00531768,19.3356243 L6,19.5 L6,32.5 C6,33.8254834 7.03153594,34.9100387 8.33562431,34.9946823 L8.5,35 L10.999,34.9998109 L11,19.691806 Z M25.8762073,4.48892843 C25.2374367,4.20664325 24.4901296,4.32658331 23.9717769,4.79458254 L23.8563749,4.90873628 L16.7845638,12.5698649 C15.0720217,14.4251189 14.0879555,16.8322413 14.0056218,19.3481017 L14,19.691806 L14,35 L30.8153416,35 C32.7378388,35 34.4306442,33.7818174 35.0591689,31.9970798 L35.1245828,31.7964773 L35.1809828,31.5914103 L38.2946365,19.1367956 C38.3454135,18.9336877 38.3704763,18.7250059 38.3693593,18.5156507 C38.3613898,17.1901906 37.3234456,16.1117634 36.0188787,16.0348445 L35.8544744,16.0305004 L25.3519695,16.092701 C24.3515068,16.0986262 23.6386117,15.147766 23.8939535,14.2046325 L23.9328058,14.0817382 L26.7128941,6.40896478 C26.9503329,5.75365676 26.7109691,5.0279391 26.1472432,4.63922508 L26.0215356,4.56123591 L25.8762073,4.48892843 Z"></path>
    </SvgIcon>
  );
});

export default IconRecommend;