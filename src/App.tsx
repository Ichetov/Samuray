import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './components/profile/Profile';
import { Footer } from './components/footer/Footer';
import { Dialogs } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';




function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Profile/>
        {/* <Dialogs /> */}
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




