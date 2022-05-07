import { Field, Form, Stepper } from '@wemo-ui/marrs';
import { useTheme } from '@wemo-ui/marrs/styles';
import { noop } from '@wemo-ui/marrs/utils/helperFunctions';

const Steps = (props) => {
  const { onChange = noop } = props;
  const theme = useTheme();

  const handleFormChange = (fv) => {
    onChange({
      steps: {
        radius: fv.radius,
        spacing: fv.spacing
      }
    });
  };

  const steps = {
    radius: theme.steps?.radius || 4,
    spacing: theme.steps?.spacing || 4
  };
  return (
    <Form
      labelWidth={120}
      onChange={handleFormChange}
      initialValues={{
        ...steps
      }}
    >
      <Field label="圆角基础值(px)" name="radius">
        <Stepper step="1" min={1} />
      </Field>
      <Field label="间隙基础值(px)" name="spacing">
        <Stepper step="1" min={1} />
      </Field>
    </Form>
  );
};

export default Steps;
