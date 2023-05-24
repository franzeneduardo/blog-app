import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: auto;
`;

function MainContent({ children }) {
  return (
    <MainContentContainer>
      {children}
    </MainContentContainer>
  );
}

export default MainContent;
