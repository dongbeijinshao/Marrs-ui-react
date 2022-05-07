import { Button, Icon, IconButton } from '@wemo-ui/marrs';
import { IconDelete } from '@wemo-ui/marrs-icons';
import Badge from '@wemo-ui/marrs/Badge';
import { useEffect, useState } from 'react';
import Demo from './Demo';

const BadgeView = () => {
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
    <div>
      <Demo title="icon" padding>
        <Badge content={badgeContent} showBadge={(c: number) => c % 2 === 1}>
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
        <Badge
          content={badgeContent}
          dotOnly
          showBadge={(c: number) => c % 2 === 1}
          sx={{ marginLeft: 10 }}
        >
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
        <Badge
          content={badgeContent}
          formatter={(content: string) =>
            Number(content) > 99 ? '99+' : content
          }
          sx={{ marginLeft: 10 }}
        >
          <Icon volume="large" icon={<IconDelete />} />
        </Badge>
      </Demo>
      <Demo title="buttonicon" padding>
        <Badge content={badgeContent}>
          <IconButton icon={<IconDelete />} />
        </Badge>
      </Demo>
      <Demo title="buttonicon" padding>
        <Badge content={badgeContent}>
          <Button volume="tiny">按钮</Button>
        </Badge>
      </Demo>
    </div>
  );
};

export default BadgeView;
