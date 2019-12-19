import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleBtn from './components/GoogleBtn';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const GRAPHQL_URL = 'http://localhost:8000/graphql/'
const client = new ApolloClient({
  uri: GRAPHQL_URL 
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <br/>

          <a href={GRAPHQL_URL} style={{ color: 'white' }}>
            Go to GraphiQL
          </a>
          <br/>

          <GoogleBtn />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
