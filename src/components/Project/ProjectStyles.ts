import Link from 'next/link'
import {device} from 'src/theme'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Name = styled.h1`
  flex-grow: 1;
`

export const Details = styled.div`
  margin-right: 3rem;
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
  max-width: 40rem;
  font-size: 1.5rem;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`

export const ProjectHeader = styled.div`
  margin-bottom: 6rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
`

export const ProjectType = styled(Link)`
  font-size: 1rem;
  width: 16rem;
  text-transform: uppercase;
`

export const ProjectYear = styled.div``

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

export const ImageSection = styled.div``

export const GalleryImage = styled.img``

export const Caption = styled.div`
  margin-top: 0.5rem;
  text-align: left;
  display: block;
  font-size: 1rem;
`
