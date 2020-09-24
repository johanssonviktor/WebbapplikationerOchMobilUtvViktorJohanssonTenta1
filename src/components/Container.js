import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, ImageText } from "../components"

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
