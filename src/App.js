import './App.css'
import React from 'react';
import Header from './components//Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-context'>
        <Routes>
          <Route path='/' element={<Profile />}></Route>
          <Route path='massage' element={<Dialogs />}></Route>
          <Route path='news' element={<Dialogs />}></Route>
          <Route path='music' element={<Dialogs />}></Route>
          <Route path='settening' element={<Dialogs />}></Route>
        </Routes>
      </div>

    </div>
  );
};

export default App;
