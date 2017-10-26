import React, { Component } from 'react';
import './App.css';

// React router
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'

import response from './mock/template_service.json';

// Reactstrap - Bootstrap components
import { 
  Container, 
  Row, 
  Col,
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem,
  NavLink as NavLinkBootstrap,
  Jumbotron,
  Button
} from 'reactstrap';

// Componentes da Aplicação
import ContextChooser from './components/contextChooser';
import ContextDetails from './components/contextDetails';
import LoginScreen from './components/login';
import Project from './components/projeto';

const Context = () => (
  <ContextChooser data={this.state.cidadao} />
);

const ContextDetailsComponent = ({ match }) => {
  let detailsComponent;
  switch (match.params.name) {
    case 'programas_sociais':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Programas Sociais')} />;
      break;
    case 'receita':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Receita')} />;
      break;
    case 'trabalho':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Trabalho')} />;
      break;
    case 'justica':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Justiça')} />;
      break;
    case 'saude':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Saúde')} />;
      break;
    case 'educacao':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Educação')} />;
      break;
    case 'previdencia':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Previdência')} />;
      break;
    case 'grupo_familiar':
      detailsComponent = <ContextDetails contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Grupo Familiar')} />;
      break;
    default:
      let personal_data = {
        nome: this.state.cidadao.nome,
        dadosPessoais: this.state.cidadao.dadosPessoais,
      }
      detailsComponent = <ContextDetails contextData={personal_data} />;
      break;
  }
  
  return (
    detailsComponent
  );
};



const About = () => (
  <div>
    <h2>Sobre</h2>
  </div>
);

const Help = () => (
  <div>
    <h2>Ajuda</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthenticated: false,
    };
    let isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
      this.state.isAuthenticated = true;
      this.loadFromMock();
    }
  }

  loadCachedData() {
    
  }

  login(event) {
    event.preventDefault();
    this.setState({
      isAuthenticated: true
    });
    localStorage.setItem('authenticated', true);
  }

  logout() {
    this.setState({
      isAuthenticated: false
    });
    localStorage.removeItem('authenticated');
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  loadFromMock() {
    this.state.cidadao = response;
  }

  loadFromServer() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://192.168.0.89:8081/Contextos_Cidadao/10016380409/Assistencia");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
  }

  render() {
    let menuOptions;
    let navbarLinks;
    if (this.state.isAuthenticated) {
      menuOptions = (
        <Col md="12" className="center">
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/context" render={() => <ContextChooser data={this.state.cidadao} />} />
          <Route path="/details/:name" render={ 
            ({ match }) => {
              let detailsComponent;
              switch (match.params.name) {
                case 'programas_sociais':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Programas Sociais')} />;
                  break;
                case 'receita':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Receita')} />;
                  break;
                case 'trabalho':
                  detailsComponent = <ContextDetails
                    contextName={match.params.name} 
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Trabalho')} />;
                  break;
                case 'justica':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Justiça')} />;
                  break;
                case 'saude':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Saúde')} />;
                  break;
                case 'educacao':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Educação')} />;
                  break;
                case 'previdencia':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Previdência')} />;
                  break;
                case 'grupo_familiar':
                  detailsComponent = <ContextDetails 
                    contextName={match.params.name}
                    contextData={this.state.cidadao.contextos.find((el) => el.nome === 'Grupo Familiar')} />;
                  break;
                default:
                  let personal_data = {
                    nome: this.state.cidadao.nome,
                    dadosPessoais: this.state.cidadao.dadosPessoais,
                  }
                  detailsComponent = <ContextDetails 
                    isProfile={true}
                    contextName={match.params.name}
                    contextData={personal_data}
                    contextList={this.state.cidadao.contextos} />;
                  break;
              }
              
              return ( detailsComponent ) 
            } } />
        </Col>);
      navbarLinks = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/context/" activeClassName="active">Facilidades</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/project/" activeClassName="active">Projeto</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about/" activeClassName="active">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/help/" activeClassName="active">Ajuda</NavLink>
          </NavItem>
          <NavItem>
            <NavLinkBootstrap className="nav-link" href="#" onClick={this.logout.bind(this)}>Sair</NavLinkBootstrap>
          </NavItem>
        </Nav>);
    } else {
      menuOptions = (
        <Col md="12" className="center">
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/login" render={() => <LoginScreen login={this.login.bind(this)} />} />
        </Col>);
      navbarLinks = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/project/" activeClassName="active">Projeto</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about/" activeClassName="active">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/help/" activeClassName="active">Ajuda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login/" activeClassName="active">Acessar</NavLink>
          </NavItem>
        </Nav>);
    }

    return (
      <Router>
        <Container fluid>
          <Navbar color="dark" dark fixed="top" expand="md" id="mainNavbar">
            <NavbarBrand tag={Link} to="/context">Cidadão 360</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {navbarLinks}
            </Collapse>
          </Navbar>
          <Container className="containerPadding main-container">
              <Row>
                {menuOptions}
            </Row>
          </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
