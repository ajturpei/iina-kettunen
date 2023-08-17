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
    const {mainImage, name, year, sys} = item
    const {url, description} = mainImage
    return (
      <ItemWrapper key={index} href={`${link}/${sys.id}`}>
        <div>
          <Img src={url} alt={description} />
        </div>
        <ItemInfoWrapper>
          <NameWrapper>{name}</NameWrapper>
          <YearWrapper>{year}</YearWrapper>
        </ItemInfoWrapper>
      </ItemWrapper>
    )
  })
}

export default ProjectWithMainImage
