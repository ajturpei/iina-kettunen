'use client'

import SwitchButton from '../Buttons/SwitchButton'
import {Divider} from '../UI/generalLayoutStyles'
import {ProjectHeader, ProjectType, ProjectYear} from './ProjectStyles'

const ProjectDetails = ({
  year,
  collectionType,
  isInProduction,
}: {
  year: number
  collectionType: any
  isInProduction: boolean
}) => {
  const isSetDesign = collectionType?.[0] === 'set'
  const collectionText = isSetDesign ? 'Set design' : 'Product design'
  const link = isSetDesign ? '/set-design' : '/product-design'

  return (
    <>
      <Divider />
      <ProjectHeader>
        <ProjectType href={link}>{collectionText}</ProjectType>
        <ProjectYear>{year}</ProjectYear>
        {!isSetDesign && (
          <SwitchButton on={isInProduction} text="In production" />
        )}
      </ProjectHeader>
    </>
  )
}

export default ProjectDetails
