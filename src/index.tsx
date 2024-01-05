import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import iconPost from './images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'

let postMessages = [
  { message: 'Hello how are you?', likeCount: 10, icon: iconPost, id: 1 },
  { message: 'Did you go', likeCount: 6, icon: iconPost, id: 2 },
  { message: 'Did you drink wine?', likeCount: 57, icon: iconPost, id: 3 }
]

let dialogsData = [
  { name: 'Андрей', id: 1 },
  { name: 'Иван', id: 2 },
  { name: 'Михаил', id: 3 },
]

let postData = [
  { message: 'Как дела', id: 1},
  { message: 'Когда занятия?', id: 2 },
  { message: 'Кто знает отличие useEffect от useLayout?', id: 3},
]


ReactDOM.render(
  <BrowserRouter>
    <App postMessages = {postMessages} dialogsData = {dialogsData} postData = {postData}/>
  </BrowserRouter>,
  document.getElementById('root')
);