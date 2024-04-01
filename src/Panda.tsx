import React from 'react';
import OperationShort from 'src/components/OperationShort/OperationShort';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { withLayout } from './Layouts/Layout';

const Panda = () => {
  return (
    <div>
      Main Page Panda
      <OperationShort sum={100} category={'category'} name={'name'} description={'description'}/>
    </div>
  );
};

export default withLayout(Panda);
