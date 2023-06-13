'use client'

import {ItemWrapper, Img, NameWrapper, YearWrapper} from '../Home/HomeStyles'

const ProjectWithMainImage = ({items, link}: any) => {
  return items?.map((item: any, index: number) => {
    const {mainImage, name, year, sys} = item
    const {url, description} = mainImage
    return (
      <ItemWrapper key={index} href={`${link}/${sys.id}`}>
        <Img src={url} alt={description} />
        <NameWrapper>{name}</NameWrapper>
        <YearWrapper>{year}</YearWrapper>
      </ItemWrapper>
    )
  })
}

export default ProjectWithMainImage
