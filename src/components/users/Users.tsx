import { useEffect } from "react";
import { DataStateType } from "../redux/users-reducer";
import img from './../../images/x2097369-1271064885.png';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export type UsersType = {
    changeIsDone: (value: boolean, id: number) => void
    users: DataStateType[]
    totalCount: number
    setCurrentPage: (id: number) => void
    currentPage: number
    changeUnFollow: (id: number) => void
    changeFollow: (id: number) => void
}


export const Users = ({ changeFollow, users, changeUnFollow, totalCount, setCurrentPage, currentPage }: UsersType) => {


    let allUsers = users.map(it => {
        return <div key={it.id} style={{ marginTop: '15px' }}>
            <Link to={`/profile/${it.id}`} onClick={() => { }}><img style={{ width: '60px' }} src={it.photos.small || img} /></Link>
            <div>{it.name}</div>
            {/* <button onClick={() => changeIsValue(it.id)}>{it.followed ? 'Unfollow' : 'Follow'}</button> */}
            {it.followed ? <button onClick={()=> changeUnFollow(it.id)}>Unfollow</button> : <button onClick={()=> changeFollow(it.id)}>Follow</button>}



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