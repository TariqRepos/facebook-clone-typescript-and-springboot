import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import { User } from 'firebase/auth';
import Form from './Form'

interface Props {
  user: JSON;
  setUser: React.Dispatch<React.SetStateAction<JSON>>;
}

const Auth: React.FC<Props> = ({ user, setUser }) => {
  console.log('here');
  
  return (
    <div className='flex w-full h-screen bg-blue-500'>
      
      <div className='hidden lg:flex mt-500 mx-auto h-full w-1/2 items-center justify-center bg-white'>
        <div className='h-96'>
          <img width={450} className='items-center justify-center mx-auto' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb_logo" />
          <p className="text-xl font-">Facebook helps you connect and share with the people in your life.</p>
        </div>
      </div>

      <div className='w-full m-20 flex items-center justify-center lg:w-1/2'>
        <Form user={user} setUser={setUser} />
      </div>
    </div>
  );
}

export default Auth