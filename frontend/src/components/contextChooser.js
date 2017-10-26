import React, { Component } from 'react';

import {
  CardColumns,
} from 'reactstrap';

import { Redirect } from 'react-router-dom';

import ContextCard from './contextCard';

import previdencia from '../images/previdencia.svg';
import trabalho from '../images/trabalho.svg';
import receita from '../images/receita.svg';
import justica from '../images/justica.svg';
import saude from '../images/saude.svg';
import educacao from  '../images/educacao.svg';
import programas_sociais from '../images/programas_sociais.svg';
import cidadao_360 from '../images/cidadao_360.svg';

class ContextChooser extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    let cards = [];

    let personal_data = {};
    if (this.props.data !== undefined && this.props.data !== null) {
      personal_data.nome = this.props.data.nome,
      personal_data.dadosPessoais = this.props.data.dadosPessoais;

      cards.push(<ContextCard key={0} src={cidadao_360} data={personal_data} to="/details/cidadao-360/" />);
      
      this.props.data.contextos.forEach((c) => {
      
        if (c.nome === 'Programas Sociais') {
          cards.push(<ContextCard key={c.id} src={programas_sociais} data={c} to="/details/programas_sociais" />)
        } else if (c.nome === 'Receita') {
          cards.push(<ContextCard key={c.id} src={receita} data={c} to="/details/receita" />)
        } else if (c.nome === 'Trabalho') {
          cards.push(<ContextCard key={c.id} src={trabalho} data={c} to="/details/trabalho" />)
        } else if (c.nome === 'Justiça') {
          cards.push(<ContextCard key={c.id} src={justica} data={c} to="/details/justica" />)
        } else if (c.nome === 'Saúde') {
          cards.push(<ContextCard key={c.id} src={saude} data={c} to="/details/saude" />)
        } else if (c.nome === 'Educação') {
          cards.push(<ContextCard key={c.id} src={educacao} data={c} to="/details/educacao" />)
        } else if (c.nome === 'Previdência') {
          cards.push(<ContextCard key={c.id} src={previdencia} data={c} to="/details/previdencia" />)
        } else if (c.nome === 'Grupo Familiar') {
          cards.push(<ContextCard key={c.id} src={programas_sociais} data={c} to="/details/grupo_familiar" />)
        }
      });

      return (
        <div className="center">
          <CardColumns>
            { cards }
          </CardColumns>
        </div>
      );
    } else {
      return (
        <Redirect to="/context" />
      );
    }
  }
}

export default ContextChooser;