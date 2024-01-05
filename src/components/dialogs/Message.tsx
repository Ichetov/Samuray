import React from "react"




export type MessagePropsType = {
    message: string
    id: number
}


export const Message: React.FC<MessagePropsType> = ({message}) => {

    return (
            <div>{message}</div>
    )
}