import { FlexBox, Icon, Rate } from '@wemo-ui/marrs';
import {
  IconBackTop,
  IconDiamond,
  IconDiamondSolid
} from '@wemo-ui/marrs-icons';
import React from 'react';

function RateView() {
  const [moveVal, setMoveVal] = React.useState(3);

  function onChange(e, v) {
    setMoveVal(v);
  }

  return (
    <div style={{ fontSize: 16, padding: 20 }}>
      <FlexBox container>
        默认样式：
        <Rate />
      </FlexBox>
      <FlexBox>
        只读样式：
        <Rate value={2} onChange={onChange} icon={<IconDiamondSolid />} />
      </FlexBox>
      <FlexBox>
        禁用样式：
        <Rate disabled={true} value={2} />
      </FlexBox>
      <FlexBox>
        自定样式：
        <Rate
          num={4}
          volume={10}
          value={3}
          color="success"
          gap={10}
          readOnly={false}
          icon={<Icon icon={<IconBackTop />} spin />}
          emptyIcon={<IconDiamond />}
          onChange={onChange}
        />
      </FlexBox>
      当前移动到{moveVal}
    </div>
  );
}

export default RateView;
