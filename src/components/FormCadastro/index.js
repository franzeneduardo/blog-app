import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, addMinutes } from 'date-fns'; // Importe as funções necessárias do date-fns
import { createCourse } from '../../api/api';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #2c88d9;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e5f8d;
  }
`;

function FormCadastro({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const currentDateTime = format(addMinutes(new Date(), 5), 'dd-MM-yyyy HH:mm'); // Obtenha a data e hora atual + 5 minutos
    setCreatedAt(currentDateTime); // Defina a data e hora atual + 5 minutos como valor inicial
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const courseData = { title, description, instructor: author, createdAt };
      await createCourse(courseData);
      onSubmit();
      setTitle('');
      setDescription('');
      setAuthor('');
      const currentDateTime = format(addMinutes(new Date(), 5), 'dd-MM-yyyy HH:mm'); // Obtenha a data e hora atual + 5 minutos
      setCreatedAt(currentDateTime); // Redefina a data e hora atual + 5 minutos após o envio do formulário
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Título:</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Descrição:</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Autor:</Label>
          <Input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Data de Criação:</Label>
          <Input
            type="text"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
            readOnly // Impede que o campo seja editado manualmente pelo usuário
          />
        </FormGroup>
        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  );
}

FormCadastro.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormCadastro;
