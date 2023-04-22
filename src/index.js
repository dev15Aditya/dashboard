import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-02bm213l1ur8e5lx.us.auth0.com"
    clientId="TnF879YlP49OYfRxZMvlbe8ux5xxFYYi"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
