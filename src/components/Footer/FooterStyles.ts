import {device} from 'src/theme'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 6rem 0 2rem;
  font-size: 0.75rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`

export const FooterContentWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: 2fr 1fr 1fr;
  @media ${device.laptop} {
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: 1fr 3fr 1fr;
  }
`

export const FooterContentList = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: left;
  flex-direction: column;
  width: 100%;
  grid-column: span 2;
  font-size: 0.75rem;
  @media ${device.laptop} {
    font-size: 1rem;
    grid-column: auto;
    flex-direction: row;
    width: auto;
  }
  li {
    position: relative;
    margin: 0 0 0.5rem;
    @media ${device.laptop} {
      margin: 0 1rem;
    }
    list-style-type: none;
    &:before {
      @media ${device.laptop} {
        content: '●';
        position: absolute;
        left: -1.25rem;
        top: -1px;
      }
    }
    &:first-child {
      list-style-type: none;
      &:before {
        content: '';
      }
    }
  }
`

export const FooterHeader = styled.h5`
  display: block;
  font-weight: 300;
  font-size: 0.75rem;
  flex-grow: 1;
  text-align: left;
  @media ${device.laptop} {
    width: auto;
    font-size: 1rem;
  }
`

export const CopyrightWrapper = styled.h5`
  grid-column-start: auto;
  display: block;
  font-weight: 300;
  font-size: 0.75rem;
  grid-column-start: 2;
  @media ${device.laptop} {
    width: auto;
    text-align: right;
    grid-column-start: auto;
    font-size: 1rem;
  }
`
