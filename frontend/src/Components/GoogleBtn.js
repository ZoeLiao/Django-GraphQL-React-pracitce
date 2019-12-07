import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
//import { Auth } from './Auth'


const CLIENT_ID = '750120651658-lkthrcf9d14jj6m06crko5nomile1dv8.apps.googleusercontent.com';


// class property: do not need to bind function
class GoogleBtn extends Component {
  state = {
    isLogined: false,
    accessToken: ''
  };

  responseGoogle = (response) => {
    if(response.Zi.access_token){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.Zi.access_token
      }));

      window.localStorage.setItem('ACCESS_TOKEN', this.state.accessToken);

    }
  }

  logout = (response) => {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    window.localStorage.removeItem('ACCESS_TOKEN');
  }

  handleLogoutFailure = (response) => {
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
