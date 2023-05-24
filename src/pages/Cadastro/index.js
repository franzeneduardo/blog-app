import React from 'react';
import FormCadastro from '../../components/FormCadastro';

function Cadastro() {
  const handleFormSubmit = () => {
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado!');
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <FormCadastro onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Cadastro;
