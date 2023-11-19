import Link from 'next/link'
import {device} from 'src/theme'
import styled from 'styled-components'
import {ItemInfoWrapper, NameWrapper, YearWrapper} from '../Home/HomeStyles'

export const HeaderWrapper = styled.div`
  display: block;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    display: flex;
  }
`

export const SetDesignContainer = styled.div``

export const Name = styled.h1`
  display: block;
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 6rem;
  }
`

export const Details = styled.div`
  margin-right: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${device.tablet} {
    display: block;
    min-width: 20rem;
  }
  > p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  b {
    text-transform: uppercase;
  }
`

export const Description = styled.p`
  display: block;
  max-width: 50rem;
  padding-bottom: 3rem;
`

export const ProjectHeader = styled.div`
  margin-bottom: 6rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
`

export const ProjectType = styled(Link)`
  font-size: 1rem;
  margin-right: 6.625rem;
  text-transform: uppercase;
`

export const ProjectYear = styled.div`
  margin-right: 6.625rem;
`

export const GallerySectionFull = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const GallerySectionHalf = styled.section<{
  layoutType: 'left' | 'right'
}>`
  margin: 3rem 0;
  display: flex;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  &:last-child {
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    flex-direction: ${({layoutType}) =>
      layoutType === 'left' ? 'row' : 'row-reverse'};

    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    h5 {
      margin-top: 0;
      padding: ${({layoutType}) =>
        layoutType === 'left' ? '0 0 0 3rem' : '0 3rem 0 0'};
    }
    > div {
      width: calc(50% - 2rem);
      text-align: ${({layoutType}) =>
        layoutType === 'left' ? 'left' : 'right'};

      > a > div {
        min-height: auto;
        align-items: center;
      }
    }
  }
`

export const GallerySection5050 = styled.section`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 2rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  > div {
    width: 100%;
  }
`

export const GallerySectionTwoThird = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  img {
    width: 100%;
  }
  @media ${device.tablet} {
    flex-wrap: nowrap;
    gap: 2rem;
    > div {
      width: 66.66%;
    }
    span {
      width: 33.33%;
    }
  }
`

export const ImageSection = styled.div`
  position: relative;
`

export const GalleryImage = styled.img``
