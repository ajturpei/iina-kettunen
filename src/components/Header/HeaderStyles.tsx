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

export const LinkContainer = styled.ul`
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media ${device.tablet} {
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
  }
  gap: 5.25rem;
  list-style-type: none;
`
export const LinkElement = styled.li<{firstel: string; active: string}>`
  position: relative;
  display: ${({firstel}) => (firstel === 'true' ? 'block' : 'none')};
  @media ${device.tablet} {
    display: block;
  }
  a {
    margin-bottom: 1rem;
    &:before {
      font-size: 4rem;
      position: absolute;
      left: -1.5rem;
      top: -0.25rem;
      content: ${({firstel, active}) =>
        active === 'true' && firstel === 'false' ? "'·'" : 'none'};
    }
  }
`

export const MobileNav = styled.button`
  all: unset;
  svg {
    fill: red;
    stroke: red;
    color: red;
  }
  align-self: flex-start;
  justify-self: flex-end;
`

export const IMG = styled.img`
  fill="#ffffff";
  stroke: #f50550;
  color: red;
`
