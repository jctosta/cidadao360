import React, { Component } from 'react';
import './App.css';

// React router
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import response from './mock/hbase_response.json';

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
  NavItem
} from 'reactstrap';

// Componentes da Aplicação
import ContextChooser from './components/contextChooser';
import ContextDetails from './components/contextDetails';

const Context = () => (
  <ContextChooser />
);

const ContextDetailsComponent = ({ match }) => (
  <ContextDetails contextName={match.params.name} />
);

const Project = () => (
  <div>
    <h2>Projeto</h2>
  </div>
);

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
      isOpen: false
    };
    this.loadFromMock();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loadFromMock() {
    response.Row.forEach((r) => {
      console.log(`Row key: ${window.atob(r.key)}`);
      r.Cell.forEach((c) => {
        console.log(`Cell Column: ${window.atob(c.column)}\nCell Value: ${window.atob(c.$)}`);
      });
    });
    //console.log(response);
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
    return (
      <Router>
        <Container>
          
          <Navbar light expand="md">
            <NavbarBrand tag={Link} to="/context">Cidadão 360</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
              </Nav>
            </Collapse>
          </Navbar>
          <Container>
              <Row>
                <Col md="12" className="center">
                  <Route path="/project" component={Project} />
                  <Route path="/about" component={About} />
                  <Route path="/help" component={Help} />
                  <Route path="/context" component={Context} />
                  <Route path="/details/:name" component={ContextDetailsComponent} />
                </Col>
            </Row>
          </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
