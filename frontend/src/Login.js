import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
function Login() {
  return (
    <GoogleLogin
      clientId="750120651658-2i700kpmcfi7oru6dp8j0q02n2r9hing.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login;
