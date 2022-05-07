import { FlexBox } from '@wemo-ui/marrs';
import { styled } from '@wemo-ui/marrs/styles';
import DemoContainer from '../DemoContainer/Demo';

const randomColor = () => {
  const max = 255;
  const color = () => Math.round(Math.random() * max);

  return `rgb(${color()},${color()},${color()})`;
};

const Box = styled('div', {
  name: 'Box'
})(({ theme }) => {
  return {
    width: '100%',
    height: 50,
    background: randomColor(),
    color: theme.palette.primary.main
  };
});

const FlexBoxDemo = () => {
  return (
    <DemoContainer title="基础样式" background={false} padding>
      <FlexBox container gap={1}>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={1}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={2}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={2}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={2}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={3}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={3}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={3}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={3}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={4}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={4}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={4}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={6}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={6}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={6}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={6}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={12}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={12}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={12}>
          <Box></Box>
        </FlexBox>
        <FlexBox item space={24}>
          <Box></Box>
        </FlexBox>
      </FlexBox>
    </DemoContainer>
  );
};

export default FlexBoxDemo;
