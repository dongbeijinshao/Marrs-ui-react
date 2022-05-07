import { FlexBox } from '@wemo-ui/marrs';
import { IconAdd } from '@wemo-ui/marrs-icons';
import { styled } from '@wemo-ui/marrs/styles';

const randomeColor = () => {
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
    background: randomeColor(),
    boxShadow: theme.shadows.create(3),
    color: theme.palette.primary.main
  };
});

function FlexBoxView() {
  return (
    <div style={{ padding: 0 }}>
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

      <FlexBox container gap={2} wrap="nowrap">
        <FlexBox item space={3}>
          <IconAdd />
        </FlexBox>
        <div style={{ width: '100%' }}>123</div>
        <FlexBox item space={3}>
          -
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default FlexBoxView;
