import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo';


const GET_AUTH = gql`
  mutation SocialAuth($provider: String!, $accessToken: String!) {
  socialAuth(provider: $provider, accessToken: $accessToken) {
    social {
      uid
      extraData
    }
  }
}
`
export function Auth() {

  let input;
  const [socialAuth, { data }] = useMutation(GET_AUTH);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          socialAuth({ variables: { 'provider': 'google-oauth2', 'accessToken': input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <br/>
        <button type="submit">Get Email</button>
      </form>

      { data? <h5> Your email: { data.socialAuth.social.uid } </h5>: ''}

    </div>
  );
}
