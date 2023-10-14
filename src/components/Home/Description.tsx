'use client'

import Link from 'next/link'
import {DescriptionContainer, MiniHeading} from './HomeStyles'

const Description = ({
  description,
  heading,
  headingLink,
}: {
  description?: string
  heading?: string
  headingLink?: string
}) => {
  if (!description) {
    return null
  }
  return (
    <DescriptionContainer>
      <p>{description}</p>
      {heading &&
        (headingLink ? (
          <MiniHeading>
            <Link href={headingLink}>{heading}</Link>
          </MiniHeading>
        ) : (
          <MiniHeading>{heading}</MiniHeading>
        ))}
    </DescriptionContainer>
  )
}

export default Description
