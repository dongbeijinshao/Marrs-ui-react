import { Badge, Icon } from '@wemo-ui/marrs';
import DemoContainer from '../DemoContainer/Demo';
import { IconDelete } from '@wemo-ui/marrs-icons';

import { useEffect, useState } from 'react';

const BadgeDemo = () => {
  const [badgeContent, setBadgeContent] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBadgeContent(badgeContent + 1);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [badgeContent]);
  return (
    <>
      <DemoContainer title="基础用法" background={false} padding>
        <Badge content={5} color="success" className="demo-margin-r-10">
          内容
        </Badge>
      </DemoContainer>

      <DemoContainer title="展示红点" background={false} padding>
        <Badge dotOnly>
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
      </DemoContainer>

      <DemoContainer title="自定义逻辑函数" background={false} padding>
        <Badge content={badgeContent} showBadge={(c) => c % 2 === 1}>
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
      </DemoContainer>

      <DemoContainer title="格式化内容" background={false} padding>
        <Badge
          content={badgeContent}
          formatter={(content) => (content > 99 ? '99+' : content)}
          sx={{ marginLeft: 10 }}
        >
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
      </DemoContainer>
    </>
  );
};

export default BadgeDemo;
