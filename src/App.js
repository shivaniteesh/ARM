import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import User from './components/User';
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<AboutUs/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/UserDetails' element={<UserDetails/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </div>
  );
}

export default App;
