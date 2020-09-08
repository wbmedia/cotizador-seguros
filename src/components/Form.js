import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDiff, calculateBrand, getPlan } from './../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 1em;
  padding: 1rem;
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top:2rem;

  &:hover {
    background-color: #26c6da;
    transition: background-color: .3s ease;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
`;

const Form = ({ setResume }) => {
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const getFormData = (e) => {
    saveData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === '' || year.trim === '' || plan.trim === '') {
      setError(true);
      return;
    }
    setError(false);

    let result = 2000;

    const dateDif = getYearDiff(year);

    result -= (dateDif * 3 * result) / 100;

    result = calculateBrand(brand) * result;

    const incrementPlan = getPlan(plan);

    result = parseFloat(incrementPlan * result).toFixed(20);

    setResume({
      quote: result,
      data: data,
    });
  };

  return (
    <form onSubmit={onSubmit} method='POST'>
      {error ? <Error>All Inputs are Required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name='brand' value={brand} onChange={getFormData}>
          <option value=''>Select</option>
          <option value='europe'>Europe</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
        </Select>
      </Field>
      <Field>
        <Label>Year </Label>
        <Select name='year' value={year} onChange={getFormData}>
          <option value=''>Select</option>
          <option value='2010'>2010</option>
          <option value='2011'>2011</option>
          <option value='2012'>2012</option>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          checked={plan === 'basic'}
          type='radio'
          name='plan'
          value='basic'
          onChange={getFormData}
        />{' '}
        Basic
        <InputRadio
          checked={plan === 'gold'}
          type='radio'
          name='plan'
          value='gold'
          onChange={getFormData}
        />{' '}
        Gold
      </Field>

      <Button type='submit'> Quote</Button>
    </form>
  );
};

export default Form;
