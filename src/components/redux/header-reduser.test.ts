import { headerReducer } from "./header-reducer"


test('change isAuth', () => {

   type DataType = {
      id: number
      email: string
      login: string
   }
   let initialState = {
      isAuth: false,
      data: null,
      profile: null
   }

   let endState = headerReducer(initialState, { type: 'CHANGE-ISAUTH', isVal: true });

   expect(endState.isAuth).toBe(true)

})