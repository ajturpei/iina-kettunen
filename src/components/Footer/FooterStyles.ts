import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 6rem 0 2rem;
`

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 2rem;
  flex-wrap: wrap;
`

export const FooterContentList = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;
  li {
    position: relative;
    margin: 0 1rem;
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
`

export const CopyrightWrapper = styled.h5`
  display: block;
  font-weight: 300;
`
