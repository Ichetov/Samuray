import { useEffect } from "react";
import { DataStateType } from "../redux/users-reducer";
import img from './../../images/x2097369-1271064885.png';
import axios from "axios";
import styled, { css } from "styled-components";


export type UsersType = {
    changeIsDone: (id: number, value: boolean) => void
    users: DataStateType[]
    totalCount: number
    setCurrentPage: (id: number) => void
    currentPage: number
}


export const Users = ({ users, changeIsDone, totalCount, setCurrentPage, currentPage }: UsersType) => {


    let allUsers = users.map(it => {
        return <div key={it.id} style={{ marginTop: '15px' }}>
            <div><img style={{ width: '60px' }} src={it.photos.small || img} /></div>
            <div>{it.name}</div>
            <button onClick={() => changeIsDone(it.id, it.followed ? false : true)}>{it.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
    })

    let m = [];
    let z = Math.ceil(totalCount / 5);

    for (let i = 1; i <= z; i++) {
        m.push(i)
    }


    return (
        <>

            <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                {m.map(it => {
                    return <NumbersPage $isDone={currentPage === it} onClick={() => setCurrentPage(it)} key={it}>{it}</NumbersPage>
                })}
                {allUsers}
            </div>
        </>
    )
}

const NumbersPage = styled.span<{ $isDone: boolean }>`
cursor: pointer;
font-size: 18px;
& + span{
    margin-left: 5px;
}

${({ $isDone }) => $isDone && css`

  color: blue;

`}

&: hover{
    color: blue
}
`