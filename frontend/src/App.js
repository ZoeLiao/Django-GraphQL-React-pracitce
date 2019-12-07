import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleBtn from './Components/GoogleBtn';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <br/>

        <ApolloProvider client={client}>
          <a href='http://localhost:8000/graphql' style={{ color: 'white' }}>
            Go to GraphiQL
          </a>
        </ApolloProvider>
        <br/>

        <GoogleBtn />
      </header>
    </div>
  );
}

export default App;
