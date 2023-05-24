import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Author = styled.p`
  font-size: 14px;
  color: #666;
`;

function Card({ title, description, author }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Author>Author: {author}</Author>
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Card;
