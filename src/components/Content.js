import React from "react"
import { ContentWrapper } from "../elements"
import { HeadingWrapper } from "./Heading"
import { PostWrapper } from "./BlogPostWrapper"

export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <HeadingWrapper />
      <PostWrapper>{children}</PostWrapper>
    </ContentWrapper>
  )
}
