
import styled from "styled-components"

export type PostType = {
    icon: string
    message: string
    likeCount: number
    id: number
}

export const Post:React.FC<PostType> = ({icon, message, likeCount, id }) => {
    return (
        <PostStyled>
            <PostWrapper>
                <Img src={icon} />
                 <MessageStyled>{message}</MessageStyled>
                 <div>Like: {likeCount }</div>
            </PostWrapper>

        </PostStyled>
    )
}

const PostStyled = styled.section`
grid-area: content;
padding-top: 5px;
border: 1px solid black;
border-radius: 20px;
&+&{
    margin-top: 10px;
}
`

const Img = styled.img`
width: 40px;
`

const MessageStyled = styled.span`
margin-left: 10px;
`

const PostWrapper = styled.div`
margin-left: 40px;
`