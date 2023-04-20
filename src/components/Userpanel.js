import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Chart from './Chart';
import TopProducts from './TopProducts';
import Schedule from './Schedule';

export default function Userpanel({ user, onLogout }) {
  return (
    <div>
      <Navbar />
      <Cards />
      <div className="flex justify-center md:w-[83%] md:ml-[240px] pt-5 pb-2">
        <Chart />
      </div>
      <div className="flex flex-wrap justify-center md:ml-[270px] md:justify-between p-5">
        <TopProducts />
        <Schedule />
      </div>

      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
