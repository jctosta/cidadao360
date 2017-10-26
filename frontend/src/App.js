import React, { Component } from 'react';
import './App.css';

// React router
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
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
} from 'reactstrap';

//NavLink as NavLinkBootstrap,

// Componentes da Aplicação
import ContextChooser from './components/contextChooser';
import ContextDetails from './components/contextDetails';
import LoginScreen from './components/login';
import Project from './components/projeto';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthenticated: false,
      version: '0.0.1-hackathon'
    };
    let isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
      this.state.isAuthenticated = true;
    }
  }

  login(event) {
    event.preventDefault();
    this.setState({
      isAuthenticated: true,
      recentLogin: true,
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
    this.setState({
      cidadao: response
    });
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

  componentWillMount() {
    
  }

  render() {

    if (this.state.recentLogin && this.state.isAuthenticated) {
      this.setState({
        recentLogin: false
      });
      return (<Redirect to="/context" />);
    }
    

    let menuOptions;
    let navbarLinks;
    if (this.state.isAuthenticated) {
      if (this.state.cidadao === undefined || this.state.cidadao === null) {
        this.loadFromMock();
      }
      // Usuário logado
      menuOptions = (
        <Col md="12" className="center">
          <Route exact path="/" render={() => <ContextChooser data={this.state.cidadao} />} />
          <Route path="/project" component={Project} />
          <Route path="/logout" render={() => {
            this.logout();
            return (<Redirect to="/project" />);
          }} />
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
            <NavLink className="nav-link" to="/project/" activeClassName="active">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link mdi mdi-account" to="/logout" activeClassName="active">Sair</NavLink>
            {/* <NavLinkBootstrap className="nav-link" href="#" onClick={this.logout.bind(this)}>Sair</NavLinkBootstrap> */}
          </NavItem>
        </Nav>);
    } else {
      menuOptions = (
        <Col md="12" className="center">
          <Route exact path="/" component={Project} />
          <Route path="/context" component={Project} />
          <Route path="/project" component={Project} />
          <Route path="/login" render={() => <LoginScreen login={this.login.bind(this)} />} />
        </Col>);
      navbarLinks = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/project/" activeClassName="active">Sobre</NavLink>
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
          <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-text mr-auto">
              <span className="d-none d-lg-block d-xl-block">Versão {this.state.version}</span>
            </span>
            <span className="navbar-text">
              Hackathon Dataprev 2017
            </span>
          </nav>
        </Container>
      </Router>
    );
  }
}

export default App;
