import React, {useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') || '{}'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to={ JSON.stringify(user) !== '{}' ? '/home' : '/home' } />} />
        <Route path='/home' element={ JSON.stringify(user) !== '{}' ? <Home user={user} setUser={setUser} /> : <Navigate to='/auth' /> } />
        <Route path='/auth' element={ JSON.stringify(user) !== '{}'? <Navigate to='/home' /> : <Auth user={user} setUser={setUser} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
