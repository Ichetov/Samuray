import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './components/profile/Profile';
import { Footer } from './components/footer/Footer';
import { Dialogs } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';
import { Route, Routes } from 'react-router-dom';
import { PostType } from './components/profile/posts/post/Post';
import { DialogPropsType } from './components/dialogs/Dialog';
import { MessagePropsType } from './components/dialogs/Message';


type AppPropsType = {
  postMessages: Array<PostType>
  dialogsData: Array<DialogPropsType>
  postData: Array<MessagePropsType>
}


function App({postMessages, dialogsData,postData}: AppPropsType) {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path='/profile' element={<Profile postMessages = {postMessages}/>} />
          <Route path='/dialogs/*' element={<Dialogs postData = {postData} dialogsData = {dialogsData}/>} />
        </Routes>
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




