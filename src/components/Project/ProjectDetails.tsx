'use client'

import Status from '../Buttons/Status'
import {Divider} from '../UI/generalLayoutStyles'
import {ProjectHeader, ProjectType, ProjectYear} from './ProjectStyles'

const ProjectDetails = ({
  year,
  collectionType,
  projectStatus,
}: {
  year: number
  collectionType: any
  projectStatus?: string
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
        <Status text={projectStatus} />
      </ProjectHeader>
    </>
  )
}

export default ProjectDetails
