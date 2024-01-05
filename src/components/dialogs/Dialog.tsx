import React from "react"
import { NavLink } from "react-router-dom"



export type DialogPropsType = {
    name: string
    id: number
}


export const Dialog: React.FC<DialogPropsType> = ({name, id}) => {
    let path = '/dialogs/'+id;
    return (
        <div>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

