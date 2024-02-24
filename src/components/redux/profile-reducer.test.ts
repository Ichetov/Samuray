import { addPostAction, postMessagesPropsType, profileReducer } from "./profile-reducer"



test('adding posts', () => {

    let initialState: postMessagesPropsType = {
        postMessages: [
            { message: 'Hello how are you?', likeCount: 10, icon: '', id: 1 },
            { message: 'Did you go', likeCount: 6, icon: '', id: 2 },
            { message: 'Did you drink wine?', likeCount: 57, icon: '', id: 3 }
        ],
        postInputText: '',
        userId: 0,
        user: null
    }

    let endState = profileReducer(initialState, addPostAction('Test'));

    expect(endState.postMessages.length).toBe(4);
    expect(endState.postMessages[3].message).toBe('Test')
})


// test('adding data user', () => {
 
// })


