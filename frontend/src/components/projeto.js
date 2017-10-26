import React, { Component } from 'react';
import {
  Jumbotron,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

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
    let isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated) {
      return (
        <div>
          <Jumbotron className="jumbotron-transparent center-text">
            {/* <h1 className="display-3">Cidadão 360º</h1> */}
            <img src={logo} />
            <br />
            <br />
            <p className="lead">Acesse suas informações governamentais de maneira fácil e unificada.</p>
            <hr className="my-2" />
            <p>O aplicativo Cidadão 360º permite ao cidadão brasileiro acessar informações dos mais diversos contextos, agregadas de maneira simples e organizada.</p>
            <p className="lead">
              <Link to="/login" className="btn btn-primary">Acessar com o Cidadão BR</Link>
            </p>
          </Jumbotron>
        </div>
      );
    } else {
      return (
        <div>
          <Jumbotron className="jumbotron-transparent center-text">
            {/* <h1 className="display-3">Cidadão 360º</h1> */}
            <img src={logo} />
            <br />
            <br />
            <p className="lead">Acesse suas informações governamentais de maneira fácil e unificada.</p>
            <hr className="my-2" />
            <p>O aplicativo Cidadão 360º permite ao cidadão brasileiro acessar informações dos mais diversos contextos, agregadas de maneira simples e organizada.</p>
            <p className="lead">
              <Link to="/context" className="btn btn-primary">Acessar o dashboard</Link>
            </p>
          </Jumbotron>
        </div>
      );
    }
    
  }
}

export default Project;