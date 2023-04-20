import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Chart from './components/Chart';
import TopProducts from './components/TopProducts';
import Schedule from './components/Schedule';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="bg-[#F5F5F5]">
      {/* {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      <Navbar />
      <Cards />
      <div className="flex justify-center md:w-[83%] md:ml-[240px] pt-5 pb-2">
        <Chart />
      </div>
      <div className="flex flex-wrap justify-center md:ml-[270px] md:justify-between p-5">
        <TopProducts />
        <Schedule />
      </div>
    </div>
  );
}

export default App;
