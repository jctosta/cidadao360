import React, { Component } from 'react';
import {
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input } from 'reactstrap';
import logo_cidadao from '../images/logo-cidadao-vertical.svg';

class LoginScreen extends Component {
  render() {
    return (
      <Form className="center login-form" onSubmit={this.props.login}>
        <FormGroup className="center-text">
          <div><img src={logo_cidadao} alt="Cidadão BR" width="50%" /></div>
          <p>O cidadão.br é uma forma de acesso único a serviços, informações e sistemas do governo brasileiro.</p>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">CPF</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Informe um CPF válido..." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Senha</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Informe sua senha..." />
        </FormGroup>
        <Button color="primary">Acessar</Button>
      </Form>
    );
  }
}

export default LoginScreen;