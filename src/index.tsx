import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRootreducer, store } from './components/redux/redux-store';
import StoreContext from './StoreContext';
import { Provider } from 'react-redux';
import { router } from './routes/router';






  ReactDOM.render(

      <Provider store={store}>
        <RouterProvider router = {router}/>
      </Provider>,
    document.getElementById('root')
  );






// store.subscribe(() => {
//   rernderEntireTree(store.getState())
// })



