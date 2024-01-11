import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addGetMessagePost, changeText, subscribe, state } from './components/redux/State';


export const rernderEntireTree = () => {

ReactDOM.render(
  <BrowserRouter>
    <App changeText = {changeText} addGetMessagePost = {addGetMessagePost} state = {state}/>
  </BrowserRouter>,
  document.getElementById('root')
);

}

subscribe(rernderEntireTree);

rernderEntireTree()