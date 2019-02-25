import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import config from './../config.json';

class UserLogin extends Component {
  responseFacebook = (response) => {
    console.log(response);
  }
  responseGoogle = (response) => {
    console.log(response);
  }
  onFailure = (error) => {
    alert(error);
  };
  render() {
      
    return (
        <Row>
            <Col lg="3" xs="3"></Col>
            <Col lg="6" xs="6">
                <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                buttonText="Login with google"
                className="text-center google-class"
                onSuccess={this.responseGoogle}
                onFailure={this.onFailure}
                />
                <FacebookLogin
                appId={config.FACEBOOK_APP_ID}
                autoLoad={false}
                fields="name,email,picture"
                cssClass="text-center facebook-class"
                callback={this.responseFacebook} />
            </Col>
        </Row>
    );
  }
}

export default UserLogin; 