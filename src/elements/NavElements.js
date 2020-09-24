import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 1000;

  span {
    padding: 15px;
    color: ${props => props.theme.colors.main3};
    /* padding: 15px 0; */
    /* z-index: 20; */
  }

  H2 {
    padding: 1rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 6;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  padding: 0 4rem;

  li {
    padding: 18px 10px;
    color: ${props => props.theme.colors.whiteopacity};
  }


  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.main3};
    position: fixed; 
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0; 
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    opacity: 0.8;

    li {
      color: #fff;
      margin: 0 auto;
    }
  }
`

export const StyledBurger = styled.div`
  grid-column: 2 / span 6;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px; 
  z-index: 30;
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 40;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

