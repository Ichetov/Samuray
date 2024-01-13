import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPostAction, statePropsType, store} from './components/redux/State';


export const rernderEntireTree = (state: statePropsType) => {

ReactDOM.render(
  <BrowserRouter>
    <App dispatch = {store.dispatch.bind(store)} state = {state}/>
  </BrowserRouter>,
  document.getElementById('root')
);

}

store.subscribe(rernderEntireTree);

rernderEntireTree(store.getState())