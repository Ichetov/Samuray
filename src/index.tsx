import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppRootreducer, store } from './components/redux/redux-store';
import StoreContext from './StoreContext';
import { Provider } from 'react-redux';






  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );






// store.subscribe(() => {
//   rernderEntireTree(store.getState())
// })



