'use client'

import {device} from 'src/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin-bottom: 8rem;
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

export const LinkContainer = styled.ul<{isOpen: boolean}>`
  grid-template-columns: 4fr 1fr;
  display: ${({isOpen}) => (isOpen ? 'none' : 'grid')};
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
  }
  gap: 5.25rem;
  list-style-type: none;
`
export const LinkElement = styled.li<{
  noMain: boolean
  firstel: string
  active: string
}>`
  position: relative;
  display: ${({firstel, noMain}) =>
    firstel === 'true' && !noMain
      ? 'block'
      : firstel !== 'true' && noMain
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

export const MobileNav = styled.div<{isOpen: boolean}>`
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
  height: ${({isOpen}) => (isOpen ? 'calc(100% - 3.5rem)' : 0)};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  z-index: 10000;
  background: ${({theme}) => theme.background};
  color: ${({isOpen, theme}) => (isOpen ? theme.text : 'transparent')};

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
