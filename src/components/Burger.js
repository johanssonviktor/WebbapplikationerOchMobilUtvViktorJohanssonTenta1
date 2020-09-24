import React, { useState } from "react"
import { StyledBurger } from "../elements"
import { RightNav } from "./RightNav"

// Export burger menu, sets state to false as default so the menu will be closed on load.
export const Burger = () => {
  const [open, setOpen] = useState(false)

  // Onclick event for the burger menu, when clicked the burger menu will open
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
