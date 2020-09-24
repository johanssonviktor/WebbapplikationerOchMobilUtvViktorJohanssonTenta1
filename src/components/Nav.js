import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, H2 } from "../elements"
import { Burger } from "./Burger"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "airplane.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      {/* <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link> */}
      <H2 color="whiteopacity">TRAVEL<span>BLOG</span></H2>
      <Burger />
    </NavWrapper>
  )
}