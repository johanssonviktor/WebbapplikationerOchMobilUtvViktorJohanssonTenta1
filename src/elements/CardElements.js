import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 3rem 2rem 0 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.crimson};
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.shadow2};
`
