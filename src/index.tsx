import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppRootreducer, store } from './components/redux/redux-store';


export const rernderEntireTree = (state: AppRootreducer) => {
ReactDOM.render(
  <BrowserRouter>
    <App dispatch = {store.dispatch.bind(store)} state = {state}/>
  </BrowserRouter>,
  document.getElementById('root')
);

}

rernderEntireTree(store.getState())


store.subscribe(()=>{
  rernderEntireTree(store.getState())
})



