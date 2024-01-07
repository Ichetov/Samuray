import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getMessagePost, state } from './components/redux/State';




export function mix(){

ReactDOM.render(
  <BrowserRouter>
    <App getMessagePost = {getMessagePost} state = {state}/>
  </BrowserRouter>,
  document.getElementById('root')
);

}

mix()