import React, { Component } from 'react';
import {
  Jumbotron,
  Button
} from 'reactstrap';

class Project extends Component {
  componentDidMount() {
    document.body.classList.toggle('background-bsb');
    document.getElementById("mainNavbar").classList.toggle("navbar-transparent");
  }

  componentWillUnmount() {
    document.body.classList.toggle('background-bsb');
    document.getElementById("mainNavbar").classList.toggle("navbar-transparent");
  }

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-transparent">
          <h1 className="display-3">Cidadão 360º</h1>
          <p className="lead">Acesse suas informações governamentais de maneira fácil e unificada.</p>
          <hr className="my-2" />
          <p className="lead">
            <Button color="primary">Saiba Mais</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Project;