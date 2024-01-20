import girl from './../../images/gerl.jpg'

let initialState: sidebarPropsType = {
    sidebarData: [
        { name: 'Sveta', id: 1, photo: girl },
        { name: 'Ivan', id: 2, photo: girl },
    ]
}



export const sidebarReducer = (state = initialState, action: any): sidebarPropsType => {
  return state;
}


export type sidebarObjPropsType = {
    name: string
    id: number
    photo: string
}

export type sidebarPropsType = {
    sidebarData: Array<sidebarObjPropsType>
}
