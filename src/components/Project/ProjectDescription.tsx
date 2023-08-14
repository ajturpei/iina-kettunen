'use client'

import {Description} from './ProjectStyles'

const ProjectDescription = ({description}: any) => {
  return description ? <Description>{description}</Description> : null
}

export default ProjectDescription
