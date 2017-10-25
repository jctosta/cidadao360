import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

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
    // if (this.props.contextName === 'previdencia' || this.props.contextName === 'trabalho') {
    //   document.body.classList.toggle('yellow-background');
    // } else if (this.props.contextName === 'receita' || this.props.contextName === 'justica') {
    //   document.body.classList.toggle('blue-background');
    // } else if (this.props.contextName === 'saude' || this.props.contextName === 'educacao') {
    //   document.body.classList.toggle('grey-background');
    // } else if (this.props.contextName === 'midias_sociais' || this.props.contextName === 'programas_sociais') {
    //   document.body.classList.toggle('red-background');
    // } else {
    //   document.body.classList.toggle('green-background');
    // }
    
  }
  componentWillUnmount() {
    // if (this.props.contextName === 'previdencia' || this.props.contextName === 'trabalho') {
    //   document.body.classList.toggle('yellow-background');
    // } else if (this.props.contextName === 'receita' || this.props.contextName === 'justica') {
    //   document.body.classList.toggle('blue-background');
    // } else if (this.props.contextName === 'saude' || this.props.contextName === 'educacao') {
    //   document.body.classList.toggle('grey-background');
    // } else if (this.props.contextName === 'midias_sociais' || this.props.contextName === 'programas_sociais') {
    //   document.body.classList.toggle('red-background');
    // } else {
    //   document.body.classList.toggle('green-background');
    // }
  }
  render() {
    return (
      <div>
        <h2>{this.props.contextName} Context Details</h2>
        <br />
        <Nav pills>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Eventos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Notificações
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <br />
                <Timeline>
                  <TimelineEvent title="John Doe sent a SMS"
                    createdAt="2016-09-12 10:06 PM"
                    icon={<i className="material-icons md-18">textsms</i>}
                  >
                    I received the payment for $543. Should be shipping the item within a couple of hours.
                    </TimelineEvent>
                  <TimelineEvent
                    title="You sent an email to John Doe"
                    createdAt="2016-09-11 09:06 AM"
                    icon={<i className="material-icons md-18">email</i>}
                  >
                    Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                            am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                            gentle reminder if you are on track already!
                    </TimelineEvent>
                </Timeline>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <br />
            <Row>
              
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        
      </div>
    );
  }
}

export default ContextDetails;