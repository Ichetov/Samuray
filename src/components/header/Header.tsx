import styled from "styled-components"
import icon from './../../images/TREgxKjt5pk.jpg'
import { Container } from "../Container"


export const Header = () => {
    return (
        <StyledHeader>

                <Wrapper>
                    <Img src={icon} />
                </Wrapper>

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
 background-color: green;
 padding: 10px 5px;
 grid-area: header;
`

const Img = styled.img`
 width: 50px;
 
`

const Wrapper = styled.div`
display: flex;
 
`