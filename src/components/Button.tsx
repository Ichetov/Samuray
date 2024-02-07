
type ButtonType = {
    callback: ()=> void
    title: string
}

export const Button = ({callback,title}: ButtonType) => {
    return (
        <button onClick={callback}>{title}</button>
    )
}