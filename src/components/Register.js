import React, { useState } from 'react';

const main = 'bg-[#F5F5F5] h-[100vh] w-full lg:flex lg:justify-between';
const button =
  'bg-[#FFFFFF] text-[12px] w-[48%] text-[#858585] rounded-[10px] p-[10px] flex justify-center items-center space-x-[10px] h-[30px]';
const logo =
  'text-[72px] font-bold text-[#F5F5F5] w-11/12 m-auto md:w-[60%] lg:absolute top-[40%] left-[10%]';
const label = 'text-[#000000] text-[16px]';
const labelForm = 'bg-[#F5F5F5] rounded-[10px] p-[10px] h-[40px]';

export default function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className={main}>
      <div className="bg-[#000000] lg:w-[40%]">
        <p className={logo}>Board.</p>
      </div>
      <div className="w-full lg:w-[60%] lg:flex">
        <div className="w-11/12 m-auto md:w-[60%] lg:w-[50%]">
          <p className="text-[#000000] font-bold text-[36px]">Register here</p>
          <p className="text-[#000000] text-[16px] mb-4">Create your account</p>

          <div className="flex justify-between">
            <button className={button}>
              <img src="./google.png" alt="google" />
              <p>Sign up with Google</p>
            </button>
            <button className={button}>
              <img src="./apple.png" alt="apple" />
              <p>Sign up with Apple</p>
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-[10px] bg-[#FFFFFF] p-7 mt-5 rounded-[20px]"
          >
            <p className={label}>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className={labelForm}
            />
            <p className={label}>Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className={labelForm}
            />
            <p className={label}>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={labelForm}
            />

            <button className="text-[#FFFFFF] bg-[#000000] font-bold rounded-[10px] h-[40px]">
              Sign Up
            </button>
          </form>

          <p className="text-[#858585] text-[16px] text-center">
            Already have an account?
            <button
              onClick={() => props.onFormSwitch('login')}
              className="text-[#346BD4]"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
