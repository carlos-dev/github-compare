
import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import  CompareList from '../../components/compareList'

const Main = () => (
  <Container>
    <img src={logo} alt="github compare" />

    <Form>
      <input type="text" placeholder="repositório" />
      <button>ok</button>
    </Form>

    <CompareList />
  </Container>
)

export default Main;
