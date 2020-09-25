import React from "react"
import { H1, P } from "../elements"

// Export the Wrapper for the heading
export const HeadingWrapper = () => {
  return (
    <section>
      <H1 textAlign="center" margin="0 0 1rem 0">
        The world is yours to explore!
      </H1>
      <P color="dark2" textAlign="center">
      It is not natural for us to be this sedentary. Travel is in our genes. For most of the time our species has existed, 
      “we’ve lived as nomadic hunter-gatherers moving about in small bands of 150 people or fewer,” writes Christopher Ryan in Civilized to Death. 
      This nomadic life was no accident. It was useful. “Moving to a neighboring land is always an option to avoid brewing conflict or just for a change in social scenery,” 
      says Ryan. Robert Louis Stevenson put it more succinctly: “The great affair is to move.”
      </P>
    </section>
  )
}
