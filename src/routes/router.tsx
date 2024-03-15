import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ProfileConteiner } from "../components/profile/Profile";
import { DialogsConteiner } from "../components/dialogs/Dialogs";
import { UsersContainer } from "../components/users/UsersContainer";
import { ComponentLogin, Login } from "../components/header/Login";


export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
          {
            path: '/profile/:id?',
            element: <ProfileConteiner />
          },
          {
            path: '/dialogs/*',
            element: <DialogsConteiner />
          },
          {
            path: '/users',
            element: <UsersContainer />
          },
          {
            path: '/login',
            element: <ComponentLogin />
          },
          {
            path: '/',
            element: <Navigate to = '/profile' />
          },
      ]
   },

])


{/* <Routes>
<Route path= element={} />
<Route path='/dialogs/*' element={<DialogsConteiner />} />
<Route path='/users' element={<UsersContainer />} />
<Route path='/login' element={<Login />} />
</Routes> */}