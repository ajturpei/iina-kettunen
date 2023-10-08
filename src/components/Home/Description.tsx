'use client'

import {DescriptionContainer, MiniHeading} from './HomeStyles'

const Description = ({
  description,
  heading,
}: {
  description?: string
  heading?: string
}) => {
  if (!description) {
    return null
  }
  return (
    <DescriptionContainer>
      <p>{description}</p>
      {heading && <MiniHeading>{heading}</MiniHeading>}
    </DescriptionContainer>
  )
}

export default Description
