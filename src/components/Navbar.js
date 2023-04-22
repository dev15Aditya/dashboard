import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const closeIcon =
  'w-10 hover:cursor-pointer hover:opacity-80 scale-75 active:scale-100 transition-all md:hidden';
const menuIcon =
  'w-10 hover:cursor-pointer hover:opacity-80 transition-all md:hidden';

export default function Navbar() {
  const { user } = useAuth0();

  const [open, setOpen] = useState(false);
  const links = [
    {
      index: 1,
      name: 'Dashboard',
      link: '/',
      icon: '/dashboard_icon.png',
    },
    {
      index: 2,
      name: 'Transactions',
      link: '/',
      icon: '/transition.png',
    },
    {
      index: 3,
      name: 'Schedules',
      link: '/',
      icon: '/schedule_icon.png',
    },
    { index: 4, name: 'Users', link: '/users', icon: '/user_icon.png' },
    {
      index: 5,
      name: 'Settings',
      link: '/',
      icon: '/setting_icon.png',
    },
  ];
  if (!user) {
    return <div>Loading...</div>;
  }
  const ulStyle = `absolute w-[200px] pl-8 h-[85%] rounded-[20px] bg-[#000000] top-[60px] md:my-auto space-y-5 
  md:space-y-0 md:items-center
  ${open ? 'left-0' : 'left-[-100%]'} 
  md:left-[60px]
  transition-all md:transition-none duration-300 ease-in py-8 md:py-0 md:mr-10 z-10`;

  return (
    <nav className="flex justify-between py-3 md:pt-16">
      <div className="flex items-center md:hidden">
        {open ? (
          <svg
            className={closeIcon}
            onClick={() => setOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg
            className={menuIcon}
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="black"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}

        <span className="font-bold text-[24px] ml-3">Dashboard</span>
      </div>
      <p className="hidden md:block font-bold text-[24px] pl-[300px]">
        Dashboard
      </p>

      <ul className={ulStyle}>
        <p className="text-[#FFFFFF] text-[36px] font-bold py-4">Board.</p>
        {links.map((el) => {
          return (
            <li
              key={el.index}
              className="flex items-center text-[18px] hover:font-bold hover:cursor-pointer transition-all ease-in-out py-1 md:py-2"
            >
              <img src={el.icon} alt={el.name} />
              <a className="text-[#FFFFFF] ml-3" href={el.link}>
                {el.name}
              </a>
            </li>
          );
        })}

        <div className="text-[14px] text-[#FFFFFF] absolute bottom-8">
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </div>
      </ul>

      <div className="flex items-center">
        <div className="hidden md:block">
          <div className="bg-[#FFFFFF] text-[#B0B0B0] flex justify-between items-center px-4 rounded-[10px] h-[30px]">
            <input
              className=" focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#B0B0B0"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>

        <img className="mx-3" src="/Vector.png" alt="Notifications" />
        <img
          className="h-[30px] w-[30px] rounded-full"
          src={user.picture}
          alt="User"
        />
      </div>
    </nav>
  );
}
