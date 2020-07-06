import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
  editingFood: IFoodPlate;
}

interface IEditFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

const ModalEditFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditFoodData) => {
      // EDIT A FOOD PLATE AND CLOSE THE MODAL
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          image: Yup.string()
            .matches(
              /(http(s?):)?([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
              'URL de imagem inválida',
            )
            .required('Imagem é obrigatória'),
          price: Yup.string().matches(
            /(\d+\.\d{1,2})/g,
            'Insira um valor válido (ex: 9.87 ou 12.34)',
          ),
          description: Yup.string().required('Descrição é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        handleUpdateFood(data);
        setIsOpen();
      } catch (err) {
        console.log(err);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [handleUpdateFood, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
