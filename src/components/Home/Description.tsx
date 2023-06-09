'use client'

import {DescriptionContainer} from './HomeStyles'

const Description = ({description}: any) => {
  if (!description) {
    return null
  }
  return (
    <DescriptionContainer>
      <p>{description}</p>
    </DescriptionContainer>
  )
}

export default Description
