import { Button, Empty, Image } from '@wemo-ui/marrs';
import Demo from './Demo';

const EmptyView = () => {
  return (
    <>
      <Demo title="基础样式" style={{ marginBottom: 10 }} padding>
        <Empty
          description="空态页文案"
          contentControl={
            <Image src="https://cdn2.weimob.com/static/saas-cloud-component-xapp-stc/titian/empty/empty_default.svg" />
          }
        />
      </Demo>
      <Demo title="操作按钮" style={{ marginBottom: 10 }} padding>
        <Empty
          description="空态页文案"
          contentControl={
            <Image src="https://cdn2.weimob.com/static/saas-cloud-component-xapp-stc/titian/empty/empty_default.svg" />
          }
          actionControl={<Button face="filled">立即前往</Button>}
        />
      </Demo>
      <Demo title="补充文案" style={{ marginBottom: 10 }} padding>
        <Empty
          text="补充说明文案请尽量简短"
          description="空态页文案"
          contentControl={
            <Image src="https://cdn2.weimob.com/static/saas-cloud-component-xapp-stc/titian/empty/empty_default.svg" />
          }
          actionControl={<Button face="filled">立即前往</Button>}
        />
      </Demo>
    </>
  );
};

export default EmptyView;
