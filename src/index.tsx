import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppRootreducer, store } from './components/redux/redux-store';
import StoreContext from './StoreContext';


export const rernderEntireTree = (state: AppRootreducer) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value = {store}>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );

}

rernderEntireTree(store.getState())


store.subscribe(() => {
  rernderEntireTree(store.getState())
})



