import type { Meta, StoryObj } from '@storybook/react';

import Affix from './index';
import Affix2 from "./Affix2";
import Button from "../button";

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Affix',
  component: Affix,
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
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing Affix with args: https://storybook.js.org/docs/react/writing-stories/args
/*export const Primary: Story = {
  args: {
    offset:10,
    children:<Button type="primary">
      Affix top
    </Button>,
  },
};*/


export const Basic = () => {
  return <>
    <Affix offsetTop={10}>
      <Button type="primary">
        Affix top
      </Button>
    </Affix>
    <br />
    <Button type="primary">
      Others Button
    </Button>
  </>
}

export const Basic2 = () => {
  return <>
    <Affix2 offsetTop={10}>
      <Button type="primary">
        Affix top2
      </Button>
    </Affix2>
    <br />
    <br />
    <br />
    <Button type="primary">
      Others Button
    </Button>
  </>
}

export const Secondary: Story = {
  args: {
    children:'Affix',
  },
};