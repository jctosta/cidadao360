import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import CidadaoNavbar from './components/navbar';
import ContextChooser from './components/contextChooser';


class App extends Component {
  
  render() {
    return (
      <Container>
        <CidadaoNavbar />
        <Container>
            <Row>
              <Col md="10" className="center">
                <ContextChooser />  
              </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
