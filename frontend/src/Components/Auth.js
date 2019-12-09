
import { gql } from 'apollo-boost';
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

export function Auth () {
  console.log(useMutation(GET_AUTH, {
    variables: {
      provider: 'google-oauth2',
      accessToken: 'test' 
    },
  }));

  const error = true;
  if (error) {
    return (<div>Error</div>);
  }

  return <div>Authorizated</div>
}

