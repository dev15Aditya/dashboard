import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Userpanel from './components/Userpanel';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      {isAuthenticated ? <Userpanel /> : <Login />}
    </div>
  );
}

export default App;
