import styled from "styled-components"
import { Container } from "../Container"


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                Footer
            </Container>

        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
grid-area: footer;
`