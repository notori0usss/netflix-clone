/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVarient) =>
      currentVarient === 'login' ? 'register' : 'login'
    );
  }, []);
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);
  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed'>
      <div className="bg-black md:bg-black/50 w-full h-full">
        <nav className="py-5 px-6 md:px-12">
          <img src="/images/logo.png" alt="logo" className="h-8 md:h-10" />
        </nav>
        <div className="flex justify-center items-center md:mt-10">
          <div className="bg-black/70 p-8 md:p-16 self-center mt-2 w-full md:w-3/5 md:max-w-md rounded-md">
            <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8">
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant !== 'login' && (
                <Input
                  id="name"
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                  }}
                />
              )}

              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                onClick={variant === 'login' ? login : register}
                className="bg-red-600 w-full rounded-md py-3 font-semibold text-white mt-6 transistion hover:bg-red-700 duration-200"
              >
                {variant === 'login' ? 'Sign In' : 'Register'}
              </button>
              <div className="flex items-center justify-center mt-4 gap-4">
                <div
                  onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                  role="button"
                  className="w-8 h-8 rounded-full bg-white text-2xl flex items-center justify-center"
                >
                  <FcGoogle />
                </div>
                <div
                  onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                  role="button"
                  className="w-8 h-8 rounded-full bg-white text-2xl flex items-center justify-center"
                >
                  <FaGithub />
                </div>
              </div>
              <p className="text-neutral-500 mt-4">
                {variant === 'login'
                  ? 'New to Netflix?'
                  : 'Already have an account?'}
                <button
                  onClick={toggleVariant}
                  className="ml-1 text-white font-semibold hover:underline"
                >
                  {variant === 'login' ? 'Sign up now' : 'Sign in'}
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
