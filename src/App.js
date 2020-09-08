import React, { useState } from 'react';
import Header from './components/header';
import Form from './components/Form';
import Resume from './components/resume';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.section`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  const { data } = resume;
  return (
    <>
      <Container>
        <Header title={`Insurance Quote`} />
        <FormContainer>
          <Form setResume={setResume} />
          <Resume data={data} />
        </FormContainer>
      </Container>
    </>
  );
}

export default App;
