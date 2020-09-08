import React from 'react';
import styled from '@emotion/styled';

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00808f;
  color: #ffffff;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  list-style: none;
  text-transform: capitalize;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;
  if (brand === '' || year === '' || plan === '') return null;
  return (
    <>
      <ContainerResume>
        <h2>Resume of insurance quote</h2>
        <ul>
          <ListItem>Brand: {brand}</ListItem>
          <ListItem>Year: {year}</ListItem>
          <ListItem>Plan: {plan}</ListItem>
        </ul>
      </ContainerResume>
    </>
  );
};

export default Resume;
