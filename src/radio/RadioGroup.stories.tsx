import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from './index';
import Radio from './index';

// More on how to set up button at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/RadioGroup',
    component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;



// More on writing Radio with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children:[
            <Radio value = "1" key = "1" >选项1</Radio>,
            <Radio value = "2" key = "2" >选项2</Radio>,
            <Radio value = "3" key = "3" >选项3</Radio>,
        ]
    },
};


export const underControl = () => {
    return <RadioGroup value={"1"}>
        <Radio value="1" key="1" >选项1</Radio>
        <Radio value="2" key="2" >选项2</Radio>
        <Radio value="3" key="3" >选项3</Radio>
    </RadioGroup>
};
