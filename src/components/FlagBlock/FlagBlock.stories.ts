import type { Meta } from '@storybook/react';
import { FlagBlock } from '../FlagBlock/FlagBlock';

const meta: Meta<typeof FlagBlock> = {
  title: 'FlagBlock',
  component: FlagBlock,
  tags: ['autodocs'],
};

export default meta;

export const Primary = {
  args: {
    country: 'ca',
  },
};
