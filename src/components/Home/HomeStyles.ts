import Link from 'next/link'
import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  padding: 6rem 3rem;
  white-space: pre-wrap;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  p {
    max-width: 30rem;
  }
`

export const DesignSectionContainer = styled.section`
  margin: -1rem 0 4rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ViewAll = styled(Link)`
  &:hover {
    cursor: pointer;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
`

export const YearWrapper = styled.h5``

export const NameWrapper = styled.h4`
  text-transform: uppercase;
  margin: 1rem 0 0.5rem;
`

export const ItemWrapper = styled(Link)``
