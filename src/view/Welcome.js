import {
  BaseSelector,
  BasicSelectorOption,
  Can,
  Grid,
  IconItem,
  Image,
  ImageSelectorOption,
  SearchBar,
  Tab,
  TabPanel,
  Tabs,
  Text,
  Toast,
  TreeSelect,
  TreeSelectContent,
  Typeface
} from '@wemo-ui/marrs';
import { useCallback, useRef, useState } from 'react';

export default function Welcome() {
  const ref = useRef();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChanage = useCallback((value) => {
    setTabValue(value);
  }, []);

  const handleClick = useCallback((v) => {
    Toast.info({
      message: '搜索: ' + v,
      duration: 5
    });
  }, []);

  return (
    <div style={{ background: 'rgb(244, 244, 244)' }}>
      <SearchBar
        onSearch={handleClick}
        radius={2}
        rightActionControl
        ref={ref}
      />
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>

      <Grid
        column="4"
        sx={{ background: (theme) => theme.palette.background.paper }}
      >
        <IconItem
          icon={
            <Can size={{ width: 50, height: 50 }} radius={4}>
              <Image src="https://image-c.weimobwmc.com/saas-wxbiz/474979afcd3f4a27a241525c7810ee24.jpg?imageView2/2/w/260/q/80/interlace/1" />
            </Can>
          }
          textSx={{ color: (theme) => theme.palette.text.primary }}
          text="助听器"
        ></IconItem>
        <IconItem
          icon={
            <Can size={{ width: 50, height: 50 }} radius={4}>
              <Image src="https://image-c.weimobwmc.com/saas-wxbiz/93f927d056274e82b5a9c7c0d2e829b2.jpg?imageView2/2/w/260/q/80/interlace/1" />
            </Can>
          }
          textSx={{ color: (theme) => theme.palette.text.primary }}
          text="治疗仪"
        ></IconItem>
        <IconItem
          icon={
            <Can size={{ width: 50, height: 50 }} radius={4}>
              <Image src="https://image-c.weimobwmc.com/saas-wxbiz/e9550d446c224afcaeb478ad4d965555.jpg?imageView2/2/w/750/q/80/interlace/1" />
            </Can>
          }
          textSx={{ color: (theme) => theme.palette.text.primary }}
          text="配件"
        ></IconItem>
        <IconItem
          icon={
            <Can size={{ width: 50, height: 50 }} radius={4}>
              <Image src="https://image-c.weimobwmc.com/saas-wxbiz/a06bb345363a43ad8ea80a5980b80c2e.jpg?imageView2/2/w/750/q/80/interlace/1" />
            </Can>
          }
          textSx={{ color: (theme) => theme.palette.text.primary }}
          text="天天听"
        ></IconItem>
      </Grid>

      <Image
        sx={{ margin: (theme) => theme.spacing(8, 0) }}
        src="https://image-c.weimobwmc.com/saas-wxbiz/9d96e3d143014ccf81630f00f4933740.png?imageView2/2/w/750/q/80/interlace/1"
      />

      <Tabs value={0} onChange={handleTabChanage} sticky>
        <Tab value={0}>点餐</Tab>
        <Tab value={1}>
          <Text>评价</Text>
        </Tab>
        <Tab value={2}>商家</Tab>
      </Tabs>
      <TabPanel
        visible={tabValue === 0}
        sx={{ height: 500, padding: (theme) => theme.spacing(0) }}
      >
        <TreeSelect value="selector">
          <TreeSelectContent name="shuiguo" title="水果" badge={1}>
            水果选择
          </TreeSelectContent>
          <TreeSelectContent name="yinliao" title="饮料">
            饮料选择
          </TreeSelectContent>
          <TreeSelectContent name="zhushi" title="主食">
            主食选择
          </TreeSelectContent>
          <TreeSelectContent name="shuiguo2" title="水果2" badge={1}>
            水果选择
          </TreeSelectContent>
          <TreeSelectContent name="yinliao2" title="饮料2">
            饮料选择
          </TreeSelectContent>
          <TreeSelectContent name="zhushi2" title="主食2">
            主食选择
          </TreeSelectContent>
          <TreeSelectContent name="shuiguo3" title="水果3" badge={1}>
            水果选择
          </TreeSelectContent>
          <TreeSelectContent name="yinliao3" title="饮料3">
            饮料选择
          </TreeSelectContent>
          <TreeSelectContent name="zhushi3" title="主食3">
            主食选择
          </TreeSelectContent>
          <TreeSelectContent name="selector" title="非受控选择器">
            <Typeface
              sx={{ padding: (theme) => theme.spacing(12) }}
              face="body"
            >
              <Text>汉堡套餐 -- ❤️ --</Text>
              <Text>自定义选择器</Text>
            </Typeface>

            <BasicSelectorOption label="黄金搭档" value={1} checked />
            <BasicSelectorOption label="黄金搭档" value={2} />
            <BasicSelectorOption label="黄金搭档" value={3} />
            <BasicSelectorOption label="黄金搭档" value={4} />

            <Typeface
              sx={{ padding: (theme) => theme.spacing(12) }}
              face="body"
            >
              <Text>汉堡套餐 -- ❤️ --</Text>
              <Text>基础选择器</Text>
            </Typeface>
            <BaseSelector value={[3]}>
              <BasicSelectorOption label="背背佳" value={1} />
              <BasicSelectorOption label="背背佳" value={2} />
              <BasicSelectorOption label="背背佳" value={3} />
              <BasicSelectorOption label="背背佳" value={4} />
            </BaseSelector>
            <Typeface
              sx={{ padding: (theme) => theme.spacing(12) }}
              face="body"
            >
              <Text>汉堡套餐 -- ❤️ --</Text>
              <Text>多选,限制个数</Text>
            </Typeface>
            <BaseSelector value={[1, 3]} max={2} min={1} multiple>
              <BasicSelectorOption
                color="info"
                label="背背佳"
                disabled
                value={1}
              />
              <BasicSelectorOption label="背背佳" value={2} />
              <BasicSelectorOption label="背背佳" value={3} />
              <BasicSelectorOption label="背背佳" value={4} />
            </BaseSelector>
            <Typeface
              sx={{ padding: (theme) => theme.spacing(12) }}
              face="body"
            >
              <Text>汉堡套餐 -- ❤️ --</Text>
              <Text>乱写的图片选择</Text>
            </Typeface>
            <BaseSelector value={[3]} multiple>
              <ImageSelectorOption
                color="info"
                label="图片"
                src="/public/img1.png"
                value={1}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={2}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={3}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={4}
              />
            </BaseSelector>
          </TreeSelectContent>

          <TreeSelectContent name="selectorwithbase" title="基础选择器">
            <BaseSelector value={[3]}>
              <BasicSelectorOption label="背背佳" value={1} />
              <BasicSelectorOption label="背背佳" value={2} />
              <BasicSelectorOption label="背背佳" value={3} />
              <BasicSelectorOption label="背背佳" value={4} />
            </BaseSelector>
          </TreeSelectContent>
          <TreeSelectContent name="selectormultiple" title="多选">
            <BaseSelector value={[1, 3]} max={2} min={1} multiple>
              <BasicSelectorOption
                color="info"
                label="背背佳"
                disabled
                value={1}
              />
              <BasicSelectorOption label="背背佳" value={2} />
              <BasicSelectorOption label="背背佳" value={3} />
              <BasicSelectorOption label="背背佳" value={4} />
            </BaseSelector>
          </TreeSelectContent>
          <TreeSelectContent name="imageselector" title="自定义选择器">
            <BaseSelector value={[3]} multiple>
              <ImageSelectorOption
                color="info"
                label="图片"
                src="/public/img1.png"
                value={1}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={2}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={3}
              />
              <ImageSelectorOption
                label="图片"
                src="/public/img1.png"
                value={4}
              />
            </BaseSelector>
          </TreeSelectContent>
        </TreeSelect>
      </TabPanel>
      <TabPanel visible={tabValue === 1}>多文字标签</TabPanel>
      <TabPanel visible={tabValue === 2}>标签3</TabPanel>
      <p />
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
      <Image src="http://image-c.weimobwmc.com/saas-wxbiz/72b7bef8ce4346b284e848baf7447e8a.jpg?imageView2/2/w/750/q/80/interlace/1"></Image>
    </div>
  );
}
