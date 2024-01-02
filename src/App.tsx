import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './components/profile/Profile';
import { Footer } from './components/footer/Footer';
import { Messages } from './components/messages/Messages';





function App() {

  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <Profile/>
     {/* <Messages/> */}
     <Footer/>
    </div>
  );
}

export default App;




