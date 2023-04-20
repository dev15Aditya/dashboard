import React, { useState } from 'react';

const main = 'bg-[#F5F5F5] h-[100vh] w-full lg:flex lg:justify-between';
const button =
  'bg-[#FFFFFF] text-[12px] w-[48%] text-[#858585] rounded-[10px] p-[10px] flex justify-center items-center space-x-[10px] h-[30px]';
const logo =
  'text-[72px] font-bold text-[#F5F5F5] w-11/12 m-auto md:w-[60%] lg:absolute top-[40%] left-[10%]';
const label = 'text-[#000000] text-[16px]';
const labelForm = 'bg-[#F5F5F5] rounded-[10px] p-[10px] h-[40px]';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // validating user credentials
    const authenticatedUser = dummyUser.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    // give alert if wrong credential
    if (!authenticatedUser) {
      alert('Wrong credentials');
    }

    if (authenticatedUser) {
      onLogin(authenticatedUser);
    }
  };
  return (
    <div className={main}>
      <div className="bg-[#000000] lg:w-[40%]">
        <p className={logo}>Board.</p>
      </div>
      <div className="w-full lg:w-[60%] lg:flex">
        <div className="w-11/12 m-auto md:w-[60%] lg:w-[50%]">
          <p className="text-[#000000] font-bold text-[36px]">Sign In</p>
          <p className="text-[#000000] text-[16px] mb-4">
            Sign in to your account
          </p>

          <div className="flex justify-between">
            <button className={button}>
              <img src="./google.png" alt="google" />
              <p>Sign in with Google</p>
            </button>
            <button className={button}>
              <img src="./apple.png" alt="apple" />
              <p>Sign in with Apple</p>
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-[10px] bg-[#FFFFFF] p-7 mt-5 rounded-[20px]"
          >
            <label for="email" className={label} placeholder="email@gmail.com">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              className={labelForm}
            />
            <label for="password" className={label}>
              Password
            </label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              className={labelForm}
            />

            <a href="/" className="text-[16px] text-[#346BD4]">
              Forgot password?
            </a>

            <button
              type="submit"
              className="text-[#FFFFFF] bg-[#000000] font-bold rounded-[10px] h-[40px]"
            >
              Sign In
            </button>
          </form>

          {/* <p className="text-[#858585] text-[16px] text-center">
            Don't have an account?
            <button
              onClick={() => props.onFormSwitch('register')}
              className="text-[#346BD4]"
            >
              Register here
            </button>
          </p> */}
        </div>
      </div>
    </div>
  );
}
