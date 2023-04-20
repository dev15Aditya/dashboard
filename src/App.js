import React, { useState } from 'react';
import Login from './components/Login';
import Userpanel from './components/Userpanel';
import Register from './components/Register';

function App() {
  const dummyUser = [
    {
      name: 'Aditya Raj',
      email: 'aditya@gmail.com',
      password: '12345',
    },
    {
      name: 'Akshay Kumar',
      email: 'akshay@gmail.com',
      password: '54321',
    },
  ];

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleRegistration = (user) => {
    setRegisteredUser(user);
  };

  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      {/* {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}

      {loggedInUser ? (
        <Userpanel user={loggedInUser} onLogout={handleLogout} />
      ) : registeredUser ? (
        <Login onLogin={handleLogin} dummyUser={dummyUser} />
      ) : (
        <Register onRegistration={handleRegistration} dummyUser={dummyUser} />
      )}
    </div>
  );
}

export default App;
