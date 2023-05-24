import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';

const HeaderContainer = styled.div`
  background-color: #d5e7f7;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  margin-left: 15px;
`;

function SharedHeader() {
  return (
    <HeaderContainer>
      <Title>React Blog</Title>
      <ButtonContainer>
        <Link to="/"> {/* Link para a página inicial */}
          <Button>Home</Button>
        </Link>
      </ButtonContainer>
      <ButtonContainer>
        <Link to="/cadastro"> {/* Link para a página de criação de post */}
          <Button>Criar post</Button>
        </Link>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default SharedHeader;
