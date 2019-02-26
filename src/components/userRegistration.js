import React, { Component } from 'react';
import TableData from './TableData';
import { Row, Col, Button, Form, FormGroup, Label, Input, Table, Alert} from 'reactstrap';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetData = this.handleGetData.bind(this);
    this.handleClearData = this.handleClearData.bind(this);
    this.state = {
      showData : false,
      showNoData : false,
      localStorageData : []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let users;
    if (!localStorage.users) { 
        users = {}; 
    } else {
        users = JSON.parse(localStorage.users);
    }
    let jsondata = {
      name : event.target.username.value,
      email : event.target.useremail.value
    }
    users[event.target.useremail.value] = jsondata;
    localStorage.users = JSON.stringify(users);
    let parsedData = JSON.parse(localStorage.users);
    parsedData = Object.values(parsedData);
    this.setState({
      showNoData : false,
      showData : true,
      localStorageData : parsedData
    });
  }

  handleGetData = () => {
    let userData = localStorage.getItem('users'),
    parsedData = JSON.parse(userData);
    if (parsedData) {
      parsedData = Object.values(parsedData);
      this.setState({
        localStorageData : parsedData,
        showData : true,
        showNoData : false
      });
    } else {
      this.setState ({
        showData : false,
        showNoData : true
      });
    }
  }

  handleClearData = () => {
    localStorage.clear();
    this.setState ({
      showNoData : true,
      showData : false,
      localStorageData : []
    })
  } 

  render() {
    return (
      <div>
        <Form style={{marginTop:'15px'}} onSubmit={this.handleSubmit}>
          <Row>
            <Col lg="3" xs="3"></Col>
            <Col lg="6" xs="6">
              <FormGroup>
                <Label style={{textAlign:'left'}} for="username">Name <span className="red">*</span></Label>
                <Input type="text" name="username" id="username" ref={username => this.input = username} placeholder="Name" required="requird" />
              </FormGroup>
              <FormGroup>
                <Label style={{textAlign:'left'}} for="user_email">Email <span className="red">*</span></Label>
                <Input type="email" name="useremail" id="user_email" ref={useremail => this.input = useremail} placeholder="Email" required="requird" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="3" xs="3"></Col>
            <Col lg="6" xs="6" className="text-center">
              <Button color="primary" type="submit">Create Account</Button>
              <Button color="primary" type="button" style={{marginLeft:'5px'}} onClick={this.handleGetData}>Get Data</Button>
              <Button color="primary" type="button" style={{marginLeft:'5px'}} onClick={this.handleClearData}>Clear Data</Button>
            </Col>
          </Row>
        </Form>
        {
          (this.state.showData ?  
            <Table style={{marginTop:'8px'}} dark>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.localStorageData.map((item, index) => {
                      return (
                        <TableData data = {item} key={index}/>
                      )
                    })
                  }
              </tbody>
            </Table>    
          : null
          )
        }
        {
          this.state.showNoData ?  
          <Alert color="danger" className="text-center" style={{marginTop:'8px'}}>
            No Data Available
          </Alert> 
          : null
        }
      </div>
    );
  }
}

export default UserRegistration; 