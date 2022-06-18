import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Form from './components/Form';
import Navbar from './components/Navbar/Navbar';
import Login from './auth/Login';
import Auth from './components/Auth/Auth';
import firebase from "firebase/app";
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState('')

  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
    async authenticatedUser => {
      if(authenticatedUser) {
        setUser(authenticatedUser)
        setAuthState('home');
      } else {
        setUser(null);
        setAuthState('login')
      }
    })

    return unSubscribeAuth;
  }, [user])

  if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  if(authState === 'login') return <Auth user={user} setAuthState={setAuthState} setUser={setUser}/>
  // if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
  if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>

  // return (
  //   <div>
  //     <Auth />
  //     {/* <Navbar />
  //     <Layout /> */}
  //   </div>
  // );
  return (
    <div>
      APP
    </div>
  );
}

export default App;
