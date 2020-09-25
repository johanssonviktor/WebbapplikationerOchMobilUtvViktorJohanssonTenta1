import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, ImageText } from "../components"

// Exports the cointainer for the page
export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <ImageText />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
