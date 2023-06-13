'use client'

import {Divider} from '../UI/generalLayoutStyles'
import {ProjectHeader, ProjectType, ProjectYear} from './ProjectStyles'

const ProjectDetails = ({
  year,
  collectionType,
}: {
  year: number
  collectionType: any
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
      </ProjectHeader>
    </>
  )
}

export default ProjectDetails
