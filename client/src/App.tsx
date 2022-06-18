import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from './components/Auth/Auth';
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Home from './components/Home/Home';

const App = () => {
  const [userProfile, setUserProfile] = useState(auth?.currentUser);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(auth?.currentUser);
    } else {
      setUserProfile(null);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to={ userProfile ? '/home' : '/auth' } />} />
        <Route path='/home' element={ userProfile ? <Home /> : <Navigate to='/auth' /> } />
        <Route path='/auth' element={ userProfile ? <Navigate to='/home' /> : <Auth /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
