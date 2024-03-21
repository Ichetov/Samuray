import { ChangeEvent, useEffect, useState } from "react";


type StatusType = {
    status: string
    changeStatusAC: (value: string) => void
}

export const Status = ({ status, changeStatusAC }: StatusType) => {
    const [value, setValue] = useState(status);
    const [isDone, setIsDone] = useState(false);
    

    useEffect(()=>{
        setValue(status)
    },[status])

    function handler() {
        setIsDone(true)
    }

    const handlerInp = () => {
        setIsDone(false)
        if (value.trim() === '') {
        } else {
            changeStatusAC(value)
        }

    }

    const handlerText = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            {isDone ? <input autoFocus value={value} onChange={handlerText} onBlur={handlerInp} type='text'></input> : <div onClick={handler}>{status ? status : 'Статус отсутствует'}</div>}
        </div>
    )
}