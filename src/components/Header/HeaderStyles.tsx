'use client'

import {device} from 'src/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin-bottom: 8rem;
  @media ${device.tablet} {
    margin-bottom: 15vw;
  }
  @media ${device.laptop} {
    margin-bottom: 18vw;
  }
  @media ${device.laptopL} {
    margin-bottom: 15vw;
  }
`

export const Navigation = styled.nav`
  a,
  p {
    font-size: 1rem;
    text-transform: none;
    font-weight: 300;
    max-width: 15rem;
  }
`

export const LinkContainer = styled.ul<{isopen: string}>`
  grid-template-columns: 4fr 1fr;
  display: ${({isopen}) => (isopen === 'true' ? 'none' : 'grid')};
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
  }
  gap: 5.25rem;
  list-style-type: none;
`
export const LinkElement = styled.li<{
  nomain: string
  firstel: string
  active: string
}>`
  position: relative;
  display: ${({firstel, nomain}) =>
    firstel === 'true' && nomain === 'false'
      ? 'block'
      : firstel !== 'true' && nomain === 'true'
      ? 'block'
      : 'none'};
  @media ${device.tablet} {
    display: block;
  }
  a {
    margin-bottom: 1rem;
    &:before {
      font-size: 5rem;
      position: absolute;
      left: -1.5rem;
      top: -0.25rem;
      content: '';
      @media ${device.tablet} {
        content: ${({firstel, active}) =>
          active === 'true' && firstel === 'false' ? "'·'" : 'none'};
      }
    }
    &:hover {
      text-decoration: ${({firstel}) =>
        firstel === 'true' ? 'underline' : 'none'};
      &:before {
        @media ${device.tablet} {
          content: ${({firstel}) => (firstel === 'false' ? "'·'" : 'none')};
        }
      }
    }
  }
`

export const MobileNavButton = styled.button`
  all: unset;
  align-self: flex-start;
  justify-self: flex-end;
  @media ${device.tablet} {
    display: none;
  }
`

export const MobileNav = styled.div<{isopen: string}>`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  height: ${({isopen}) => (isopen === 'true' ? 'calc(100% - 3.5rem)' : 0)};
  opacity: ${({isopen}) => (isopen === 'true' ? 1 : 0)};
  z-index: 10000;
  background: ${({theme}) => theme.background};
  color: ${({isopen, theme}) =>
    isopen === 'true' ? theme.text : 'transparent'};

  @media ${device.tablet} {
    display: none;
  }
`

export const MobileLinkContainer = styled.ul`
  display: grid;
  grid-template-columns: 4fr 1fr;
`

export const MobileLinks = styled.ul`
  display: block;
  margin-bottom: 2rem;
  li a {
    font-size: ${({theme}) => theme.spacing.slarge};
  }
`

export const IMG = styled.img`
  filter: invert(${({theme}) => theme.invertFilter});
`
