import './App.css';
import HeaderCont from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { ProfileConteiner } from './components/profile/Profile';
import { Dialogs, DialogsConteiner } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppRootreducer } from './components/redux/redux-store';
import { AddPostActionType, ChangePostActionType } from './components/redux/profile-reducer';
import { AddMessagesActionCreatorType, ChangeDialogsActionCreatorType } from './components/redux/dialogs-reducer';
import { UsersContainer } from './components/users/UsersContainer';
import { Login } from './components/header/Login';


export type storeType = {
  getState: () => AppRootreducer
  dispatch: (action: actionPropsType) => void
}
export type actionPropsType = ChangePostActionType | AddPostActionType | ChangeDialogsActionCreatorType | AddMessagesActionCreatorType;
type AppPropsType = {
  state: AppRootreducer
  dispatch: (action: actionPropsType) => void
  store: storeType
}


function App() {
  return (
    <div className="App">
      <HeaderCont />
      <Sidebar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




