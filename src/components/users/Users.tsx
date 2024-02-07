import { useEffect } from "react";
import { DataStateType } from "../redux/users-reducer";
import img from './../../images/x2097369-1271064885.png';
import axios from "axios";


type UsersType = {
    changeIsDone: (id: number, value: boolean) => void
    users: DataStateType[]
    setUsers: (response: DataStateType[]) => void
}


export const Users = ({ users, changeIsDone, setUsers }: UsersType) => {

    useEffect(() => {
      axios('https://social-network.samuraijs.com/api/1.0/users')
      .then(response=> setUsers(response.data.items))
    }, [])

    let allUsers = users.map(it => {
        return <div key={it.id} style={{ marginTop: '15px' }}>
            <div><img style={{ width: '60px' }} src={it.photos.small ? it.photos.small : img} /></div>
            <div>{it.name}</div>
            <button onClick={() => changeIsDone(it.id, it.followed ? false : true)}>{it.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    })

    return (
        <>
            <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                {allUsers}
            </div>
        </>
    )
}