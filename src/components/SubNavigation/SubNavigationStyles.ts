import {device} from 'src/theme'
import styled from 'styled-components'

export const SubNavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`
export const SubNavLinkListElement = styled.li`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet} {
    margin-right: 8rem;
    flex-grow: 0;
  }
  a {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    &:hover {
      > div {
        color: ${({theme}) => theme.background};
        background: ${({theme}) => theme.text};
        transition: all 0.2s linear;
      }
    }
  }
`
