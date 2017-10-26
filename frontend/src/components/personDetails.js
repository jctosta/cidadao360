import React, { Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardHeader, CardBody, Button, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import classnames from 'classnames';

var ReactMarkdown = require('react-markdown');

class PersonDetails extends Component {
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

  render() {
    let dadosPessoais = this.props.contextData;

    let dadosPessoaisTable = [];
    this.props.contextData.dadosPessoais.forEach((el) => {
      dadosPessoaisTable.push(
        <tr>
          <th>{el.label}</th>
          <td>{el.valor}</td>
        </tr>
      );
    });

    // Check notification and events count
    let notificationsCount = 0;
    let allNotifications = [];

    if (this.props.contextList !== null && this.props.contextList !== undefined) {
      this.props.contextList.forEach((cl) => {
        allNotifications.push.apply(allNotifications, cl.notificacoes.map((c) => c));
      });
    }
    notificationsCount = allNotifications.length;

    let eventsCount = 0;
    let allEvents = [];

    if (this.props.contextList !== null && this.props.contextList !== undefined) {
      this.props.contextList.forEach((cl) => {
        allEvents.push.apply(allEvents, cl.eventos.map((c) => c));
      });
    }

    eventsCount = allEvents.length;

    // Get events list
    let timelineComponents = [];
    if (eventsCount > 0) {
      allEvents.forEach((ev) => {
        timelineComponents.push(
          <TimelineEvent
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
      allNotifications.forEach((not) => {
        notificationsTimelineComponents.push(
          <TimelineEvent
            title={not.titulo}
            titleStyle={{ fontWeight: "bold" }}
            createdAt={not.data_hora}
            style={{ fontSize: 16 }}
            titleStyle={{ fontWeight: 'bold' }}
            iconColor="#03a9f4"
            icon={<i className="material-icons md-18">notifications</i>}
          ><ReactMarkdown source={not.descricao} /></TimelineEvent>
        );
      });
    }

    return (

      <div>
        <h3>{this.props.contextData.nome}</h3>
        <p class="lead">Resumo das informações</p>

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
                      {dadosPessoaisTable}
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

export default PersonDetails;