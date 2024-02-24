import { DataType } from "../redux/header-reducer"

type AythType = {
    data: DataType
    photo: string | null
}


export const Auth = ({ data, photo }: AythType) => {
    return (
        <div>
            <img style={{width: '20px'}} src={photo ?? ''} alt="" />
            <div>{data.login}</div>
        </div>
    )
}