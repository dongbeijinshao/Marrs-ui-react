import { Picker, PickerGroup, PickerItem } from '@wemo-ui/marrs';
import { PureComponent } from 'react';
import Demo from './Demo';

const numtype = [
  { label: '单数', value: 'odd' },
  { label: '双数', value: 'even' }
];

const even = [2, 4, 6, 8].map((num) => ({
  label: num,
  value: num
}));

const odd = [1, 3, 5, 7, 9].map((num) => ({
  label: num,
  value: num
}));

export default class PickerClass extends PureComponent {
  constructor(props) {
    super(props);
    this.picker = {};
    this.state = {
      options: odd,
      third: [
        {
          label: '奇数',
          value: 'jishu'
        }
      ]
    };
  }

  handlePickerChange = (v) => {
    console.log('handlePickerChange', v);
  };
  handleChangeNumtype = (v) => {
    console.log('handleChangeNumtype', v);

    if (v === 'even') {
      this.setState({ options: even });
      this.picker.setValue(8);
    }
    if (v === 'odd') {
      this.setState({ options: odd });
    }
  };
  handleChangeNum = () => {
    console.log('handleChangeNum');
  };
  handleChangeThird = () => {
    console.log('handleChangeThird');
  };

  render() {
    return (
      <Demo title="基础样式" padding>
        <PickerGroup
          height={300}
          onChange={this.handlePickerChange}
          defaultValue={{
            numtype: 'even',
            num: 4
          }}
        >
          <Picker
            name="numtype"
            onChange={this.handleChangeNumtype}
            // picker={picker}
          >
            {numtype.map(({ label, value }) => {
              return (
                <PickerItem key={value} value={value}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>

          <Picker
            picker={this.picker}
            name="num"
            onChange={this.handleChangeNum}
            defaultValue={4}
          >
            {this.state.options.map(({ label, value }) => {
              return (
                <PickerItem key={value} value={value}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>

          <Picker name="third" onChange={this.handleChangeThird}>
            {this.state.third.map(({ label, value }) => {
              return (
                <PickerItem key={value} value={value}>
                  {label}
                </PickerItem>
              );
            })}
          </Picker>
        </PickerGroup>
      </Demo>
    );
  }
}
