import type { Meta } from '@storybook/react';
import { ModalWindow } from './ModalWindow';

const meta: Meta<typeof ModalWindow> = {
  title: 'Modal',
  component: ModalWindow,
  tags: ['autodocs'],
};

export default meta;

export const Show = {
  args: {
    visible: true,
    children: 'Модальное окно с каким то текстом',
  },
};

export const Hidden = {
  args: {
    ...Show.args,
    visible: false,
  },
};
