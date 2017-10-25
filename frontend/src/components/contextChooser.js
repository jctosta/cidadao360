import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';
import previdencia from '../images/previdencia.svg';
import trabalho from '../images/trabalho.svg';
import receita from '../images/receita.svg';
import justica from '../images/justica.svg';
import saude from '../images/saude.svg';
import educacao from  '../images/educacao.svg';
import midias_sociais from '../images/midias_sociais.svg';
import programas_sociais from '../images/programas_sociais.svg';
import cidadao_360 from '../images/cidadao_360.svg';

class ContextChooser extends Component {
  testEvent() {
    console.log("Elemento clicado.");
  }
  render() {
    return (
      <div className="center">
        <CardColumns>
          <Card className="hvr-buzz-out">
            <CardImg top width="100%" src={previdencia} alt="Previdência" />
          </Card>
          <Card>
            <CardImg width="50%" src={trabalho} alt="Trabalho" />
          </Card>
          <Card>
            <CardImg width="50%" src={receita} alt="Receita" />
          </Card>
          <Card>
            <CardImg width="50%" src={justica} alt="Receita" />
          </Card>
          <Card>
            <CardImg width="50%" src={cidadao_360} alt="Cidadão 360" />
          </Card>
          <Card>
            <CardImg width="50%" src={saude} alt="Saúde" />
          </Card>
          <Card>
            <CardImg width="50%" src={educacao} alt="Educação" />
          </Card>
          <Card>
            <CardImg width="50%" src={midias_sociais} alt="Mídias Sociais" />
          </Card>
          <Card>
            <CardImg width="50%" src={programas_sociais} alt="Programas Sociais" />
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default ContextChooser;