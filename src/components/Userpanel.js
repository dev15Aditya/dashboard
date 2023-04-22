import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Chart from './Chart';
import TopProducts from './TopProducts';
import Schedule from './Schedule';
import { useAuth0 } from '@auth0/auth0-react';

export default function Userpanel() {
  const { logout } = useAuth0();
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

      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    </div>
  );
}
