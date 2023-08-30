'use client'

import {GalleryImage} from '../Project/ProjectStyles'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Virtual, A11y} from 'swiper/modules'
import {numericSize} from '../../theme/breakpoints'
import {useId} from 'react'
import {SliderCount, SliderDescription} from './SliderStyles'
import {Caption} from '../UI/generalLayoutStyles'

const SliderComponent = ({imagesCollection}: any) => {
  const uid = useId()
  return (
    <>
      <Swiper
        modules={[Navigation, Virtual, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={1}
        slideVisibleClass="visible-class"
        breakpoints={{
          [numericSize.tablet]: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          [numericSize.laptop]: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          [numericSize.laptopL]: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        }}
        navigation
      >
        {imagesCollection?.items?.map(
          (imgCollectionItem: any, imgIndex: number, imagesCollection: any) => {
            const {description, url, contentfulMetadata} = imgCollectionItem
            const tag = contentfulMetadata?.tags?.[0]?.name
            return (
              <SwiperSlide
                key={`img-slider-${uid}-${imgIndex}`}
                virtualIndex={imgIndex}
              >
                <GalleryImage src={url} alt={description} />
                <SliderDescription>
                  {tag ? <Caption header>{tag}</Caption> : null}
                  <div>{description}</div>
                  <SliderCount>
                    {imgIndex + 1}—{imagesCollection.length}
                  </SliderCount>
                </SliderDescription>
              </SwiperSlide>
            )
          }
        )}
      </Swiper>
      <br />
      <br />
      <br />
    </>
  )
}

export default SliderComponent
