import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
/*  argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing Radio with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type:'primary',
    children:'Radio',
  },
};

const style={
  marginLeft: 8
}

export const Basic = () => {
  return <>
    <Radio type="primary">Primary Radio</Radio>
  </>
}

export const Secondary: Story = {
  args: {
    children:'Radio',
  },
};

