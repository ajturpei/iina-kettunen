'use client'

import {Details, HeaderWrapper, Name} from './ProjectStyles'

const ProjectHeader = ({detailsComponent, name}: any) => {
  return (
    <HeaderWrapper>
      <Name>{name}</Name>
      <Details>{detailsComponent}</Details>
    </HeaderWrapper>
  )
}

export default ProjectHeader
