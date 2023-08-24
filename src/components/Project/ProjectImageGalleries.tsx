'use client'

import {Fragment} from 'react'
import {
  GalleryImage,
  GallerySectionFull,
  GallerySectionHalf,
  GallerySectionTwoThird,
  ImageSection,
} from './ProjectStyles'
import {Caption} from '../UI/generalLayoutStyles'
import SliderComponent from '../Slider'

const GallerySection = ({imagesCollection, layoutType}: any) => {
  if (layoutType === 'slider') {
    return <SliderComponent imagesCollection={imagesCollection} />
  }
  if (layoutType === 'left' || layoutType === 'right ') {
    return (
      <GallerySectionHalf layoutType={layoutType}>
        {imagesCollection?.items?.map(
          (imgCollectionItem: any, imgIndex: number) => {
            const {description, url} = imgCollectionItem
            return (
              <Fragment key={`img-half-${imgIndex}`}>
                <ImageSection>
                  <GalleryImage src={url} alt={description} />
                </ImageSection>
                <ImageSection>
                  <Caption>{description}</Caption>
                </ImageSection>
              </Fragment>
            )
          }
        )}
      </GallerySectionHalf>
    )
  }
  if (layoutType === '2/3') {
    return (
      <GallerySectionTwoThird>
        {imagesCollection?.items?.map(
          (imgCollectionItem: any, imgIndex: number) => {
            const {description, url} = imgCollectionItem
            return (
              <Fragment key={`img-half-${imgIndex}`}>
                <ImageSection>
                  <GalleryImage src={url} alt={description} />
                </ImageSection>
                <span>
                  <Caption>{description}</Caption>
                </span>
              </Fragment>
            )
          }
        )}
      </GallerySectionTwoThird>
    )
  }
  return (
    <GallerySectionFull>
      {imagesCollection?.items?.map(
        (imgCollectionItem: any, imgIndex: number) => {
          const {description, url} = imgCollectionItem
          return (
            <ImageSection key={`img-full-${imgIndex}`}>
              <GalleryImage src={url} alt={description} />
              <Caption>{description}</Caption>
            </ImageSection>
          )
        }
      )}
    </GallerySectionFull>
  )
}

const ProjectImageGalleries = ({galleryReferenceCollection}: any) => {
  const {items} = galleryReferenceCollection || {}

  return (
    <>
      {items?.map((item: any, index: number) => {
        const {imagesCollection, layoutType} = item ?? {}
        const key = `gallery-section-${index}`
        return (
          <GallerySection
            key={key}
            imagesCollection={imagesCollection}
            layoutType={layoutType?.[0] ?? 'full'}
          />
        )
      })}
    </>
  )
}

export default ProjectImageGalleries
