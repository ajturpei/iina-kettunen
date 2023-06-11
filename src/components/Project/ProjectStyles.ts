import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`

export const Name = styled.h1`
  flex-grow: 1;
`

export const Details = styled.div`
  margin-right: 3rem;
  > p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`

export const Description = styled.p`
  display: block;
  max-width: 40rem;
  font-size: 2.5rem;
`
