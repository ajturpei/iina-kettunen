'use client'

import Link from 'next/link'
import {
  GallerySectionFull,
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

  if (index === 0 || index === 1) {
    return (
      <GallerySectionHalf layoutType={index === 0 ? 'left' : 'right'}>
        <ImageSection>
          <Link href={fixedUrl}>
            <GalleryImage src={url} alt={description} />
          </Link>
        </ImageSection>
        <ImageSection>
          <Link href={fixedUrl}>
            <ItemInfoWrapper
              $content={index === 1 ? '▸' : '◂'}
              $right={index === 1}
            >
              <NameWrapper as="h5">{name}</NameWrapper>
              <YearWrapper>{year}</YearWrapper>
            </ItemInfoWrapper>
          </Link>
        </ImageSection>
      </GallerySectionHalf>
    )
  }
  return (
    <GallerySectionFull>
      <ImageSection>
        <Link href={fixedUrl}>
          <GalleryImage src={url} alt={description} />
        </Link>
        <ItemInfoWrapper $content="▲">
          <NameWrapper as="h5">{name}</NameWrapper>
          <YearWrapper>{year}</YearWrapper>
        </ItemInfoWrapper>
      </ImageSection>
    </GallerySectionFull>
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
