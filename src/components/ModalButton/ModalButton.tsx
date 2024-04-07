import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/Button/Button';
import { ModalWindow } from 'src/components/ModalWindow/ModalWindow';
import { ModalButtonFormProps } from 'src/components/ModalButton/ModalButtonForm.props';
import styles from './ModalButton.module.scss';

export const ModalButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ModalButtonFormProps>();
  const handleOpenModal = (formData: ModalButtonFormProps) => {
    setText(formData.text);
    setValue('text', '');
    setIsOpen(true);
  };
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <div className={styles.modal}>
      <form id={'modal_form'} onSubmit={handleSubmit(handleOpenModal)}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder={'Text'}
            {...register('text', {
              required: { value: true, message: 'Please enter a valid text' },
            })}
          />
        </div>
      </form>
      <Button type={'submit'} form={'modal_form'}>
        Открыть
      </Button>
      {errors.text && <span>{errors.text.message}</span>}
      {isOpen && (
        <ModalWindow visible={isOpen} handleClose={handleCloseModal}>
          {text}
        </ModalWindow>
      )}
    </div>
  );
};
