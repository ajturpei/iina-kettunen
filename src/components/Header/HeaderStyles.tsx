'use client'

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
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  gap: 5.25rem;
  list-style-type: none;
`
export const LinkElement = styled.li<{isFirst: Boolean; active: Boolean}>`
  position: relative;

  a {
    display: block;
    margin-bottom: 1rem;
    &:before {
      font-size: 4rem;
      position: absolute;
      left: -1.5rem;
      top: -0.25rem;
      content: ${({isFirst, active}) => (active && !isFirst ? "'·'" : 'none')};
    }
  }
`
