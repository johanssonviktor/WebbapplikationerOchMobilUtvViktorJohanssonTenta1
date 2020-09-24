import styled from "styled-components"

export const BlogPostWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media ${props => props.theme.breakpoints.tablet} {
        flex-direction: column;
    }
`