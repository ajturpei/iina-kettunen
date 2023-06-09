'use client'

import {Fragment} from 'react'
import {
  Caption,
  GalleryImage,
  GallerySectionFull,
  GallerySectionHalf,
  ImageSection,
} from './ProjectStyles'

const GallerySection = ({imagesCollection, layoutType}: any) => {
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
  const {items} = galleryReferenceCollection

  return (
    <>
      {items.map((item: any, index: number) => {
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
