import type { Meta, StoryObj } from '@storybook/vue3';
import { MyButton } from '@my-lib/core';

const meta = {
  title: 'Components/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Click Me!',
  },
};
