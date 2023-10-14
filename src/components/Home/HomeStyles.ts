'use client'

import Link from 'next/link'
import styled, {css} from 'styled-components'
import {device} from '../../theme/breakpoints'

export const DescriptionContainer = styled.div`
  padding: 3rem 1rem 6rem;
  white-space: pre-wrap;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  p {
    max-width: 100%;
  }
  @media ${device.tablet} {
    justify-content: flex-end;
    padding: 6rem 3rem;
    p {
      max-width: 66%;
    }
  }
`

export const MiniHeading = styled.h5`
  margin-top: 3rem;
  display: block;
  text-transform: uppercase;
  width: 100%;
  max-width: 100%;
  a {
    font-size: inherit;
  }
  @media ${device.tablet} {
    max-width: 66%;
  }
`

export const DesignSectionContainer = styled.section<{
  animate: string
}>`
  transform: translate(0, ${({animate}) => (animate === 'true' ? 0 : '1rem')});
  opacity: ${({animate}) => (animate === 'true' ? 1 : 0)};
  transition: all 0.4s ease-out;
  display: flex;
  flex-direction: column;
  margin: -1rem 0 4rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    width: 100%;
    margin-bottom: 1rem;
  }
  @media ${device.tablet} {
    flex-wrap: nowrap;
    h2 {
      width: auto;
      margin-bottom: inherit;
    }
  }
`

export const ViewAll = styled(Link)`
  &:hover {
    cursor: pointer;
    > div {
      color: ${({theme}) => theme.background};
      background: ${({theme}) => theme.text};
      transition: all 0.1s linear;
    }
  }
  all: unset;
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
  }
  font-size: 0.75rem;
`

export const ContentWrapper = styled.article`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 5rem;
  }

  align-items: flex-end;
  column-gap: 1.5rem;
`

export const ContentWrapperSetDesign = styled.article`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 5rem;
  }

  align-items: flex-end;
  column-gap: 1.5rem;
`

export const YearWrapper = styled.h5``

export const NameWrapper = styled.h4`
  text-transform: uppercase;
  margin: 1rem 0 0.5rem;
`

export const ItemWrapper = styled(Link)``
export const ItemInfoWrapper = styled.div<{
  $content?: string
  $right?: boolean
}>`
  &:before {
    content: ${({$content}) => ($content ? `"${$content}"` : '')};
    position: absolute;
    ${({$right}) => ($right ? css(() => 'right: 0') : css(() => 'left:0'))};
  }
  min-height: 5rem;
  margin-left: ${({$content, $right}) => ($content && !$right ? '2.5rem' : 0)};
`

export const Img = styled.img``
