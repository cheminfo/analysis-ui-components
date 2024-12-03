import type { RadioGroupProps } from '@blueprintjs/core';
import { RadioGroup } from '@blueprintjs/core';
import styled from '@emotion/styled';
import type { Decorator } from '@storybook/react';
import { useState } from 'react';

import type { RadioButtonGroupProps } from '../../src/components/index.js';
import { RadioButton, RadioButtonGroup } from '../../src/components/index.js';

const ExampleGroup = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExampleDecorator: Decorator = (Story) => {
  return (
    <ExampleGroup>
      <Story />
    </ExampleGroup>
  );
};

export default {
  title: 'Forms / Radio',
  decorators: [ExampleDecorator],
};

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2', disabled: true },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

export function RadioGroupControl(
  props: Omit<RadioGroupProps, 'onChange' | 'selectedValue' | 'children'>,
) {
  const [option, setOption] = useState(options[2].value);
  return (
    <RadioGroup
      onChange={(event) => {
        const value = event.currentTarget.value;
        setOption(value);
      }}
      selectedValue={option}
      options={options}
      {...props}
    />
  );
}
RadioGroupControl.args = {
  disabled: false,
  inline: false,
  label: 'Blueprintjs radio group',
};

export function RadioButtonGroupControl(
  props: Omit<RadioButtonGroupProps, 'options' | 'selectedValue' | 'onChange'>,
) {
  const [option, setOption] = useState(options[2].value);
  return (
    <ExampleGroup>
      <RadioButtonGroup
        options={options}
        selectedValue={option}
        onChange={(event) => {
          const value = event.currentTarget.value;
          setOption(value);
        }}
        {...props}
      />
    </ExampleGroup>
  );
}
RadioButtonGroupControl.args = {
  large: false,
  disabled: false,
  label: 'Radio button group',
};

export function RadioButtonGroupOneOption() {
  const [option, setOption] = useState<string | undefined>();
  return (
    <RadioButtonGroup
      options={[options[0]]}
      selectedValue={option}
      onChange={(event) => {
        const value = event.currentTarget.value;
        setOption(value);
      }}
    />
  );
}

export function RadioButtonGroupWithChildren(
  props: Omit<RadioButtonGroupProps, 'options' | 'selectedValue' | 'onChange'>,
) {
  const [option, setOption] = useState(options[2].value);
  return (
    <ExampleGroup>
      <RadioButtonGroup
        selectedValue={option}
        onChange={(event) => {
          const value = event.currentTarget.value;
          setOption(value);
        }}
        {...props}
      >
        {options.map(({ value, label, disabled }) => (
          <RadioButton
            key={value}
            value={value}
            label={label}
            disabled={disabled}
          />
        ))}
      </RadioButtonGroup>
    </ExampleGroup>
  );
}

RadioButtonGroupWithChildren.args = {
  large: false,
  disabled: false,
};
