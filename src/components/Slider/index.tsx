'use client'

import {GalleryImage} from '../Project/ProjectStyles'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Virtual, A11y} from 'swiper/modules'
import {numericSize} from '../../theme/breakpoints'
import {useId} from 'react'

const SliderComponent = ({imagesCollection}: any) => {
  const uid = useId()
  return (
    <Swiper
      modules={[Navigation, Virtual, Pagination, A11y]}
      spaceBetween={15}
      slidesPerView={1}
      breakpoints={{
        [numericSize.tablet]: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        [numericSize.laptop]: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        [numericSize.laptopL]: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      navigation
    >
      {imagesCollection?.items?.map(
        (imgCollectionItem: any, imgIndex: number) => {
          const {description, url} = imgCollectionItem
          return (
            <SwiperSlide
              key={`img-slider-${uid}-${imgIndex}`}
              virtualIndex={imgIndex}
            >
              <GalleryImage src={url} alt={description} />
              {description && <div>{description}</div>}
            </SwiperSlide>
          )
        }
      )}
    </Swiper>
  )
}

export default SliderComponent
