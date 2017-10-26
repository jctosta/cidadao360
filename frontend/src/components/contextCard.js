import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import { 
  Card, 
  CardImg, 
} from 'reactstrap';

class ContextCard extends Component {
  
  render() {
    return (
      <Link to={this.props.to}>
        <Card className="context-card">
          <CardImg top width="100%" src={this.props.src} alt="this.props.data.nome" />
        </Card>
      </Link>
    );
  }
}

export default ContextCard;