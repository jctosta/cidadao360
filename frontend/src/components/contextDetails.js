import React, { Component } from 'react';
import { 
  Timeline, 
  TimelineEvent } from 'react-event-timeline'
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card, 
  CardHeader, 
  CardBody,
  Row, 
  Col, 
  Badge } from 'reactstrap';
import classnames from 'classnames';
import PersonDetails from './personDetails';
var ReactMarkdown = require('react-markdown');

class ContextDetails extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    if (this.props.contextName === 'previdencia' || this.props.contextName === 'trabalho') {
      document.body.classList.toggle('yellow-background');
    } else if (this.props.contextName === 'receita' || this.props.contextName === 'justica') {
      document.body.classList.toggle('blue-background');
    } else if (this.props.contextName === 'saude' || this.props.contextName === 'educacao') {
      document.body.classList.toggle('grey-background');
    } else if (this.props.contextName === 'midias_sociais' || this.props.contextName === 'programas_sociais') {
      document.body.classList.toggle('red-background');
    } else {
      document.body.classList.toggle('green-background');
    }

  }
  componentWillUnmount() {
    if (this.props.contextName === 'previdencia' || this.props.contextName === 'trabalho') {
      document.body.classList.toggle('yellow-background');
    } else if (this.props.contextName === 'receita' || this.props.contextName === 'justica') {
      document.body.classList.toggle('blue-background');
    } else if (this.props.contextName === 'saude' || this.props.contextName === 'educacao') {
      document.body.classList.toggle('grey-background');
    } else if (this.props.contextName === 'midias_sociais' || this.props.contextName === 'programas_sociais') {
      document.body.classList.toggle('red-background');
    } else {
      document.body.classList.toggle('green-background');
    }
  }
  render() {

    if (this.props.isProfile) {
      return (<PersonDetails contextData={this.props.contextData} contextList={this.props.contextList} />);
    } else {
      // Check notification and events count
      let notificationsCount = 0;
      if (this.props.contextData.notificacoes !== undefined) {
        notificationsCount = this.props.contextData.notificacoes.length;
      }
      let eventsCount = 0;
      if (this.props.contextData.eventos !== undefined) {
        eventsCount = this.props.contextData.eventos.length;
      }
      // Get events list
      let timelineComponents = [];
      if (eventsCount > 0) {
        this.props.contextData.eventos.forEach((ev, idx, arr) => {
          timelineComponents.push(
            <TimelineEvent
              key={idx}
              title={ev.titulo}
              createdAt={ev.data_hora}
              style={{ fontSize: 16 }}
              titleStyle={{ fontWeight: 'bold' }}
              iconColor="#03a9f4"
              icon={<i className="material-icons md-18">event_available</i>}>
              {<ReactMarkdown source={ev.descricao} />}
            </TimelineEvent>);
        });
      }
      let notificationsTimelineComponents = [];
      if (notificationsCount > 0) {
        this.props.contextData.notificacoes.forEach((not, idx, arr) => {
          notificationsTimelineComponents.push(
            <TimelineEvent
              key={idx}
              title={not.titulo}
              titleStyle={{ fontWeight: "bold" }}
              createdAt={not.data_hora}
              style={{ fontSize: 16 }}
              icon={<i className="material-icons md-18">notifications</i>}
              iconColor="#03a9f4"
            ><ReactMarkdown source={not.descricao} /></TimelineEvent>
          );
        });
      }
      let cardInfo = this.props.contextData.informacoes;
      let cardInfoList = [];
      if (cardInfo !== undefined && cardInfo !== null) {
        cardInfo.forEach((c, idx, arr) => {
          cardInfoList.push(
            <tr key={idx}>
              <th>{c.label}</th>
              <td>{c.valor}</td>
            </tr>);
        });
      }

      return (
        <div>
          <h3>{this.props.contextData.nome}</h3>
          <p className="lead">Notificações e eventos do contexto {this.props.contextData.nome}</p>

          <Nav pills fill>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
                <i className="material-icons md-18">people</i><br /><span className="d-none d-lg-block d-xl-block">Detalhes</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <i className="material-icons md-18">event</i><Badge color="secondary">{eventsCount}</Badge><br /><span className="d-none d-lg-block d-xl-block">Eventos</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                <i className="material-icons md-18">notifications</i><Badge color="secondary">{notificationsCount}</Badge><br /><span className="d-none d-lg-block d-xl-block">Notificações</span>
              </NavLink>
            </NavItem>
          </Nav>
          <hr />
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Card>
                    <CardHeader>
                      <strong>Informações</strong>
                    </CardHeader>
                    <CardBody>
                      <table className="table table-sm">
                        <tbody>
                          {cardInfoList}
                        </tbody>
                      </table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Timeline>
                    {timelineComponents}
                  </Timeline>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <Timeline>
                    {notificationsTimelineComponents}
                  </Timeline>
                </Col>
              </Row>
            </TabPane>
          </TabContent>

        </div>
      );
    }



  }
}

export default ContextDetails;