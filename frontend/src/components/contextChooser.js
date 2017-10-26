import React, { Component } from 'react';

import { 
  Card, 
  CardImg, 
  CardColumns,
} from 'reactstrap';

import ContextCard from './contextCard';

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
  constructor(props) {
    super(props);
  }
  
  render() {

    let cards = [];

    let personal_data = {
      nome: this.props.data.nome,
      dadosPessoais: this.props.data.dadosPessoais,
    }

    cards.push(<ContextCard src={cidadao_360} data={personal_data} to="/details/cidadao-360/" />);

    this.props.data.contextos.forEach((c) => {
    
      if (c.nome === 'Programas Sociais') {
        cards.push(<ContextCard src={programas_sociais} data={c} to="/details/programas_sociais" />)
      } else if (c.nome === 'Receita') {
        cards.push(<ContextCard src={receita} data={c} to="/details/receita" />)
      } else if (c.nome === 'Trabalho') {
        cards.push(<ContextCard src={trabalho} data={c} to="/details/trabalho" />)
      } else if (c.nome === 'Justiça') {
        cards.push(<ContextCard src={justica} data={c} to="/details/justica" />)
      } else if (c.nome === 'Saúde') {
        cards.push(<ContextCard src={saude} data={c} to="/details/saude" />)
      } else if (c.nome === 'Educação') {
        cards.push(<ContextCard src={educacao} data={c} to="/details/educacao" />)
      } else if (c.nome === 'Previdência') {
        cards.push(<ContextCard src={previdencia} data={c} to="/details/previdencia" />)
      } else if (c.nome === 'Grupo Familiar') {
        cards.push(<ContextCard src={programas_sociais} data={c} to="/details/grupo_familiar" />)
      }
    });

    return (
      <div className="center">
        <CardColumns>
          { cards }
          {/* <Link to="/details/previdencia/">
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
          </Link> */}
        </CardColumns>
      </div>
    );
  }
}

export default ContextChooser;