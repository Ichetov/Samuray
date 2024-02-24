import './App.css';
import HeaderCont from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { ProfileConteiner } from './components/profile/Profile';
import { Dialogs, DialogsConteiner } from './components/dialogs/Dialogs';
import { Wrapper } from './Wrapper';
import { Route, Routes } from 'react-router-dom';
import { AppRootreducer } from './components/redux/redux-store';
import { AddPostActionType, ChangePostActionType } from './components/redux/profile-reducer';
import { AddMessagesActionCreatorType, ChangeDialogsActionCreatorType } from './components/redux/dialogs-reducer';
import { UsersContainer } from './components/users/UsersContainer';


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
        <Routes>
          <Route path='/profile/:id?' element={<ProfileConteiner />} />
          <Route path='/dialogs/*' element={<DialogsConteiner />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </Wrapper>
      {/* <Footer/> */}
    </div>
  );
}

export default App;




