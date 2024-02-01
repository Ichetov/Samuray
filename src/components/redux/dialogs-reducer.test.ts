import { addMessagesActionCreator, dialogsReducer, postDialogsPropsType } from "./dialogs-reducer"



test('adding dialogs', () => {


    let initialState: postDialogsPropsType = {
        dialogsData: [
            { name: 'Андрей', id: 1 },
            { name: 'Иван', id: 2 },
            { name: 'Михаил', id: 3 },
        ],

        postData: [
            { message: 'Как дела', id: 1 },
            { message: 'Когда занятия?', id: 2 },
            { message: 'Кто знает отличие useEffect от useLayout?', id: 3 },
        ],
        dialogsInputText: ''
    }


    let endState = dialogsReducer(initialState, addMessagesActionCreator('Hi'));

    expect(endState.postData.length).toBe(4)
    expect(endState.postData[3].message).toBe('Hi')

})



test('adding dialogs', () => {


    let initialState: postDialogsPropsType = {
        dialogsData: [
            { name: 'Андрей', id: 1 },
            { name: 'Иван', id: 2 },
            { name: 'Михаил', id: 3 },
        ],

        postData: [
            { message: 'Как дела', id: 1 },
            { message: 'Когда занятия?', id: 2 },
            { message: 'Кто знает отличие useEffect от useLayout?', id: 3 },
        ],
        dialogsInputText: ''
    }


    let endState = dialogsReducer(initialState, addMessagesActionCreator('Hi'));

    expect(endState.postData.length).toBe(4)
    expect(endState.postData[3].message).toBe('Hi')

})