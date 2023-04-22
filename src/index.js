import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

ReactDOM.render(
  <Auth0Provider
    // fetch from .env file
    domain={process.env.DOMAIN}
    clientId={process.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
