import styled from "styled-components"

export const HeroImageText = styled.section`
    grid-column: 4 / span 8;
    grid-row: 2 / 3;
    position: relative;
    z-index: 250;
    display: flex;
    margin: auto;


    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
        H1 {
            font-size: 2rem;
            padding: 1rem;
        }
    }
`