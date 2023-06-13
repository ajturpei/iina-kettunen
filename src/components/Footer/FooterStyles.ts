import {device} from 'src/theme'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 6rem 0 2rem;
`

export const FooterContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`

export const FooterContentList = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    flex-direction: row;
    width: auto;
  }
  li {
    position: relative;
    margin: 0.25rem 1rem;
    @media ${device.laptop} {
      margin: 0 1rem;
    }
    list-style-type: none;
    &:before {
      content: '●';
      position: absolute;
      left: -1.25rem;
      top: -1px;
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
  flex-grow: 1;
  text-align: center;
  @media ${device.laptop} {
    width: auto;
    text-align: left;
  }
`

export const CopyrightWrapper = styled.h5`
  display: block;
  font-weight: 300;
`
