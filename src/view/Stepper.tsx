import { Stepper } from '@wemo-ui/marrs';
import { IconSelect, IconVip } from '@wemo-ui/marrs-icons';
import { useState } from 'react';

export const StepperView = () => {
  // const [stepperValues, setStepperValues] = useState<number[]>([]);
  const [stepperValue, setStepperValue] = useState(2);
  const handleChange = (val: number) => {
    // setStepperValues((list: any) => [...list, val]);
    console.log('val: ', val);
    setStepperValue(val);
  };

  return (
    <>
      <div>普通样式，最大值5，最小值2</div>
      <Stepper
        value={stepperValue}
        addIcon={<IconVip />}
        minusIcon={<IconSelect />}
        max={51}
        min={2}
        onChange={handleChange}
      ></Stepper>
      <div>禁用样式</div>
      <Stepper
        disabled
        defaultValue={3}
        max={5}
        min={2}
        onChange={handleChange}
      ></Stepper>
    </>
  );
};

export default StepperView;
