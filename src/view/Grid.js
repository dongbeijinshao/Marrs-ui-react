import { Grid } from '@wemo-ui/marrs';
import {
  IconAppointment,
  IconCart,
  IconHome,
  IconMineGoods
} from '@wemo-ui/marrs-icons';
import IconItem from '@wemo-ui/marrs/Icon/IconItem';
import { icons } from './Icon';

const badgeProps = {
  // content: 1,
  dotOnly: true
  // showBadge: (c) => c % 2 === 1,
  // formatter: (content) => (content > 99 ? '99+' : content)
};
function GridView() {
  const handleClick = (e) => {
    console.dir(e.target.innerText);
  };
  return (
    <div style={{ padding: 0 }}>
      <Grid column={4}>
        <IconItem text="首页" icon={<IconHome />} />
        <IconItem text="分类" icon={<IconAppointment />} />
        <IconItem badge="99+" text="购物车" icon={<IconCart />} />
        <IconItem badge={badgeProps} text="我的" icon={<IconMineGoods />} />
      </Grid>
      <Grid column={5}>
        {Object.entries(icons).map(([key, value]) => {
          return (
            <IconItem
              key={key}
              text={key}
              icon={value}
              textSx={(theme) => ({
                color: theme.palette.text.secondary
              })}
              onClick={handleClick}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default GridView;
