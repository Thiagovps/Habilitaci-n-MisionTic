
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="dev-ptt7m-z9.us.auth0.com"
    clientId="VPLkTtlMFlh39e2b4xk6VZGgnicTt58n"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
