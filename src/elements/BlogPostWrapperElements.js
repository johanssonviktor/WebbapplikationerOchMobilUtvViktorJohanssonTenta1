import styled from "styled-components"

export const BlogPostWrapper = styled.section`
    display: flex;
    flex-direction: row;

    @media ${props => props.theme.breakpoints.tablet} {
        flex-direction: column;
    }
`