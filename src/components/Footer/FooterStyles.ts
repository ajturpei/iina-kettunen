import {device} from 'src/theme'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 7rem 0 2rem;
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
  gap: 0;
  grid-template-columns: 1fr 1fr;
  @media ${device.laptop} {
    gap: 2rem;
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

  @media ${device.laptop} {
    display: block;
    text-align: center;
    grid-column: auto;
    flex-shrink: 0;
    flex-direction: row;
    width: 100%;
  }
  li,
  a {
    font-size: 0.75rem;

    @media ${device.laptop} {
      display: inline-block;
      text-align: left;
      font-size: 1rem;
    }
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
  a:hover {
    text-decoration: none;
  }
`

export const FooterHeader = styled.h5`
  display: block;
  font-weight: 300;
  font-size: 0.75rem;
  a {
    font-size: 0.75rem;
    &:hover {
      text-decoration: none;
    }
  }
  flex-grow: 1;
  text-align: left;
  @media ${device.laptop} {
    width: auto;
    font-size: 1rem;
    a {
      font-size: 1rem;
    }
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
