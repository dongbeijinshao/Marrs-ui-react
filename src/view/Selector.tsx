import { BaseSelector, BlockSelectorOption, Grid } from '@wemo-ui/marrs';

const SelectorView = () => {
  const handleChangeBaseSelector = (val) => {
    console.log(val);
  };
  // const handleChangeBaseSelector = useCallback(
  //   (value) => {
  //     console.log(value)
  //   },
  //   [],
  // )
  const disabledArr = [4, 7, 9, 22];
  return (
    <div>
      <BaseSelector multiple value={[1]} onChange={handleChangeBaseSelector}>
        <Grid
          sx={{
            gridRowGap: '10px',
            gridColumnGap: ' 10px'
          }}
          column={7}
        >
          {new Array(31).fill('').map((n, index) => {
            return (
              <BlockSelectorOption
                disabled={disabledArr.indexOf(index + 1) !== -1}
                key={index + 1}
                label={index + 1}
                value={index + 1}
              />
            );
          })}
        </Grid>
      </BaseSelector>
    </div>
  );
};
export default SelectorView;
