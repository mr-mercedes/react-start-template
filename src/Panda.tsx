import React from 'react';
import { ModalButton } from 'src/components/ModalButton/ModalButton';
import { withLayout } from './Layouts/Layout';

const Panda = () => {
  return (
    <div>
      Main Page Panda
      <ModalButton />
    </div>
  );
};

export default withLayout(Panda);
