import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
 
 
const CLIENT_ID = '750120651658-lkthrcf9d14jj6m06crko5nomile1dv8.apps.googleusercontent.com';

class GoogleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: ''
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  responseGoogle(response) {
    if(response.Zi.access_token){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.Zi.access_token
      }));
    }
  }

  logout(response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLogoutFailure(response) {
    this.setState(state => ({
      isLogined: false
    }));
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.logout}
          onFailure={this.handleLogoutFailure}
        >
        </GoogleLogout>: <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        />
      }
      { this.state.accessToken ? <h4>{this.state.accessToken}</h4> : null }
    </div>
    )
  }
}

export default GoogleBtn;
