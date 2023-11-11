'use client'

import {
  ItemWrapper,
  ItemInfoWrapper,
  Img,
  NameWrapper,
  YearWrapper,
} from '../Home/HomeStyles'

const ProjectWithMainImage = ({items, link}: any) => {
  return items?.map((item: any, index: number) => {
    const {mainImage, name, year, galleryUrl} = item
    const {url, description} = mainImage
    return (
      <ItemWrapper key={index} href={`${link}/${galleryUrl}`}>
        <div>
          <Img src={url} alt={description} />
        </div>
        <ItemInfoWrapper>
          <NameWrapper as="h5">{name}</NameWrapper>
          <YearWrapper as="h5">{year}</YearWrapper>
        </ItemInfoWrapper>
      </ItemWrapper>
    )
  })
}

export default ProjectWithMainImage
