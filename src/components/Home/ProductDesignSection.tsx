'use client'

import {DesignSectionContainer} from './HomeStyles'
import {Divider} from 'src/components/UI/generalLayoutStyles'

const DesignSection = ({header, count}: {header: string; count: number}) => {
  return (
    <DesignSectionContainer>
      <Divider />
      <h2>
        {header}
        {count}
      </h2>
    </DesignSectionContainer>
  )
}

export default DesignSection
