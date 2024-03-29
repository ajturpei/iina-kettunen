'use client'

import {Fragment} from 'react'
import {
  GalleryImage,
  GallerySectionFull,
  GallerySection5050,
  GallerySectionTwoThird,
  ImageSection,
} from './ProjectStyles'
import {Caption} from '../UI/generalLayoutStyles'
import SliderComponent from '../Slider'

const GallerySection = ({imagesCollection, layoutType}: any) => {
  if (layoutType === 'slider') {
    return <SliderComponent imagesCollection={imagesCollection} />
  }
  if (layoutType === '50/50') {
    return (
      <GallerySection5050>
        {imagesCollection?.items?.map(
          (imgCollectionItem: any, imgIndex: number) => {
            const {description, url} = imgCollectionItem ?? {}

            return (
              <div key={`img-half-${imgIndex}`}>
                <ImageSection>
                  <GalleryImage src={url} alt={description} />
                </ImageSection>
                {description && (
                  <ImageSection>
                    <Caption>{description}</Caption>
                  </ImageSection>
                )}
              </div>
            )
          }
        )}
      </GallerySection5050>
    )
  }
  if (layoutType === '2/3') {
    return (
      <GallerySectionTwoThird>
        {imagesCollection?.items?.map(
          (imgCollectionItem: any, imgIndex: number) => {
            const {description, url} = imgCollectionItem ?? {}
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
          const {description, url} = imgCollectionItem ?? {}
          return (
            <ImageSection key={`img-full-${imgIndex}`}>
              <GalleryImage src={url} alt={description} />
              {description && <Caption>{description}</Caption>}
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
