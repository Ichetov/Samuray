
import styled from "styled-components"

type PostType = {
    icon: string
    message: string
}

export const Post:React.FC<PostType> = ({icon, message}) => {
    return (
        <StyledPost>
            <div>
                <Img src={icon} />
                 {message}
            </div>

        </StyledPost>
    )
}

const StyledPost = styled.section`
grid-area: content;
`

const Img = styled.img`
width: 40px;
`