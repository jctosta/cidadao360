import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import { 
  Card, 
  CardImg, 
  CardColumns,
} from 'reactstrap';

class ContextCard extends Component {
  constructor(props) {
    super(props);
  }
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