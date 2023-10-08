import Link from 'next/link'
import {device} from 'src/theme'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: block;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    display: flex;
  }
`

export const SetDesignContainer = styled.div`
  margin-bottom: 6rem;
`

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
  grid-template-columns: 1fr 1fr;
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
  margin-bottom: 4rem;
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
  flex-direction: ${({layoutType}) =>
    layoutType === 'left' ? 'row' : 'row-reverse'};
  flex-wrap: wrap;
  gap: 2rem;
  > div {
    width: calc(50% - 1rem);
  }
`

export const GallerySectionTwoThird = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  img {
    width: 100%;
  }
  @media ${device.tablet} {
    flex-wrap: nowrap;
    > div {
      width: calc(66% - 2rem);
    }
  }
`

export const ImageSection = styled.div`
  position: relative;
`

export const GalleryImage = styled.img``
