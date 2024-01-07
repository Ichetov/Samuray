import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';
import { Route, Routes } from 'react-router-dom';
import { statePropsType } from './components/redux/State';



type AppPropsType = {
state: statePropsType
getMessagePost: (val: string) => void
}


function App({state, getMessagePost}: AppPropsType) {

  return (
    <div className="App">
      <Header />
      <Sidebar sidebarData = {state.sidebar.sidebarData}/>
      <Wrapper>
        <Routes>
          <Route path='/profile' element={<Profile getMessagePost = {getMessagePost} postMessages = {state.profile.postMessages}/>} />
          <Route path='/dialogs/*' element={<Dialogs dialogs = {state.dialogs}/>} />
        </Routes>
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




