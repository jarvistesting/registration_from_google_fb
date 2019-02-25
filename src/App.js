import React, { Component } from 'react';
import { Container } from 'reactstrap';
import UserRegistration from './components/userRegistration';
import UserLogin from './components/userLogin';
import { Row, Col} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Container>
              <UserLogin />
              <Row>
                <Col lg="3" xs="3"></Col>
                <Col lg="6" xs="6">
                  <div className="or-style" style={{marginTop:'20px'}}>OR</div>
                </Col>
              </Row>
              <UserRegistration />
            </Container>
        </div>
    );
  }
}

export default App;
