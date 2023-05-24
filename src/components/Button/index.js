import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #2c88d9;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
`;

function Button({ children, onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
