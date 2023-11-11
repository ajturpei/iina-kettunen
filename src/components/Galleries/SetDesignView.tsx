'use client'

import Link from 'next/link'
import {
  ImageSection,
  GalleryImage,
  GallerySectionHalf,
  SetDesignContainer,
} from '../Project/ProjectStyles'
import {ItemInfoWrapper, NameWrapper, YearWrapper} from '../Home/HomeStyles'

const Item = ({item, index}: {item: any; index: number}) => {
  const {mainImage, name, year, galleryUrl} = item
  const {url, description} = mainImage || {}
  const fixedUrl = `/set-design/${galleryUrl}`
  const layoutType = index % 2 === 0 ? 'left' : 'right'

  return (
    <GallerySectionHalf layoutType={layoutType}>
      <ImageSection>
        <Link href={fixedUrl}>
          <GalleryImage src={url} alt={description} />
        </Link>
      </ImageSection>
      <ImageSection>
        <Link href={fixedUrl}>
          <ItemInfoWrapper
            $content={layoutType === 'right' ? '►' : '◄'}
            $right={layoutType === 'right'}
          >
            <NameWrapper as="h5">{name}</NameWrapper>
            <YearWrapper>{year}</YearWrapper>
          </ItemInfoWrapper>
        </Link>
      </ImageSection>
    </GallerySectionHalf>
  )
}

const SetDesignView = ({items}: {items: any}) => {
  return items.map((item: any, idx: number) => (
    <SetDesignContainer key={`set-design-view-${idx}`}>
      <Item item={item} index={idx} />
    </SetDesignContainer>
  ))
}

export default SetDesignView
