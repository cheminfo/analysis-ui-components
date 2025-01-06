import type { Meta, StoryObj } from '@storybook/react';

import {
  CheckNavigator,
  CheckNavigatorProvider,
} from '../../src/components/chack_navigator/index.js';

export default {
  title: 'Components / CheckNavigator',
  component: CheckNavigator,
} as Meta;

type Story = StoryObj<typeof CheckNavigator>;

export const NavigatorFeatures = {
  argTypes: {
    fallbackComponent: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    fallbackComponent: (
      <div>Some features are not enabled. Please use a more modern browser</div>
    ),
  },
  decorators: (Story) => {
    return (
      <div style={{ padding: 10, width: 500 }}>
        <CheckNavigatorProvider
          features={[
            {
              name: 'structuredClone',
              enabled: () => typeof structuredClone === 'function',
            },
            {
              name: 'JSON.parse',
              enabled: () => typeof JSON.parse === 'function',
            },
          ]}
        >
          <Story />
        </CheckNavigatorProvider>
      </div>
    );
  },
} satisfies Story;

export const WithFailAndFallback = {
  argTypes: {
    fallbackComponent: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    fallbackComponent: (
      <div>Some features are not enabled. Please use a more modern browser</div>
    ),
  },
  decorators: (Story) => {
    return (
      <div style={{ padding: 10, width: 500 }}>
        <CheckNavigatorProvider
          features={[
            {
              name: 'structuredClone',
              enabled: () => typeof structuredClone === 'function',
            },
            { name: 'JSON.fail', enabled: () => false },
          ]}
        >
          <Story />
        </CheckNavigatorProvider>
      </div>
    );
  },
} satisfies Story;

export const WithFail = {
  argTypes: {
    fallbackComponent: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => {
    return (
      <div style={{ padding: 10, width: 500 }}>
        <CheckNavigatorProvider
          features={[
            {
              name: 'structuredClone',
              enabled: () => typeof structuredClone === 'function',
            },
            { name: 'JSON.fail', enabled: () => false },
          ]}
        >
          <Story />
        </CheckNavigatorProvider>
      </div>
    );
  },
} satisfies Story;
