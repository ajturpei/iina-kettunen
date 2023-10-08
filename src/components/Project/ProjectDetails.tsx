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
  const collectionText =
    collectionType?.[0] === 'set' ? 'Set Design' : 'Product Design'
  const link = collectionType?.[0] === 'set' ? '/set-design' : '/product-design'

  return (
    <>
      <Divider />
      <ProjectHeader>
        <ProjectType href={link}>{collectionText}</ProjectType>
        <ProjectYear>{year}</ProjectYear>
        {isInProduction && <SwitchButton text="In production" />}
      </ProjectHeader>
    </>
  )
}

export default ProjectDetails
