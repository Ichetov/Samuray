import styled from "styled-components"
import icon from './../../../images/108261978.fe2e75d1.160x160o.40118e6a2177@2x.jpeg'
import { Post } from "./post/Post"



export const MyPost = () => {
    return (
        <StyledMyPost>

            <div>
                My post
                <div>
                    <textarea ></textarea>
                    <button>Add post</button>
                </div>
                <div>
                   <Post icon = {icon} message = {'Hello how are you?'}/>
                   <Post icon = {icon} message = {'Did you go'}/>
                   <Post icon = {icon} message = {'Did you drink wine?'}/>
                </div>
            </div>

        </StyledMyPost>
    )
}

const StyledMyPost = styled.section`

`

