import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';
import { Route, Routes } from 'react-router-dom';
import { actionPropsType, statePropsType } from './components/redux/State';



type AppPropsType = {
state: statePropsType
dispatch: (action: actionPropsType) => void
}


function App({state, dispatch}: AppPropsType) {



  return (
    <div className="App">
      <Header />
      <Sidebar sidebarData = {state.sidebar.sidebarData}/>
      <Wrapper>
        <Routes>
          <Route path='/profile' element={<Profile dispatch = {dispatch} profile = {state.profile}/>} />
          <Route path='/dialogs/*' element={<Dialogs dispatch = {dispatch} dialogs = {state.dialogs}/>} />
        </Routes>
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




