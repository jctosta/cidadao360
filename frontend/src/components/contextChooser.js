import React, { Component } from 'react';
import { 
  Card, 
  CardImg, 
  CardColumns,
} from 'reactstrap';
import previdencia from '../images/previdencia.svg';
import trabalho from '../images/trabalho.svg';
import receita from '../images/receita.svg';
import justica from '../images/justica.svg';
import saude from '../images/saude.svg';
import educacao from  '../images/educacao.svg';
import midias_sociais from '../images/midias_sociais.svg';
import programas_sociais from '../images/programas_sociais.svg';
import cidadao_360 from '../images/cidadao_360.svg';

import {
  Link,
} from 'react-router-dom'

class ContextChooser extends Component {
  testEvent() {
    console.log("Elemento clicado.");
  }
  render() {
    return (
      <div className="center">
        <CardColumns>
          <Link to="/details/previdencia/">
            <Card className="context-card">
              <CardImg top width="100%" src={previdencia} alt="Previdência" />
            </Card>
          </Link>
          <Link to="/details/trabalho/">
            <Card className="context-card">
              <CardImg width="100%" src={trabalho} alt="Trabalho" />
            </Card>
          </Link>
          <Link to="/details/receita/">
            <Card className="context-card">
              <CardImg width="100%" src={receita} alt="Receita" />
            </Card>
          </Link>
          <Link to="/details/justica/">
            <Card className="context-card">
              <CardImg width="100%" src={justica} alt="Justiça" />
            </Card>
          </Link>
          <Link to="/details/cidadao-360/">
            <Card className="context-card">
              <CardImg width="100%" src={cidadao_360} alt="Cidadão 360" />
            </Card>
          </Link>
          <Link to="/details/saude/">
            <Card className="context-card">
              <CardImg width="100%" src={saude} alt="Saúde" />
            </Card>
          </Link>
          <Link to="/details/educacao/">
            <Card className="context-card">
              <CardImg width="100%" src={educacao} alt="Educação" />
            </Card>
          </Link>
          <Link to="/details/midias-sociais/">
            <Card className="context-card">
              <CardImg width="100%" src={midias_sociais} alt="Mídias Sociais" />
            </Card>
          </Link>
          <Link to="/details/programas-sociais/">
            <Card className="context-card">
              <CardImg width="100%" src={programas_sociais} alt="Programas Sociais" />
            </Card>
          </Link>
        </CardColumns>
      </div>
    );
  }
}

export default ContextChooser;