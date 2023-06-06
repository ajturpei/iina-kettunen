import styled from 'styled-components'

type PillProps = {
  count: number
  isActive: boolean
}

const PillContainer = styled.div<{isActive: boolean}>`
  background: ${({theme, isActive}) => (isActive ? theme.text : 'none')};
  border: 1px solid ${({theme}) => theme.color.text};
  border-radius: 1rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${({theme, isActive}) => (isActive ? theme.background : theme.text)};
`

const Pill = ({count, isActive}: PillProps) => {
  return <PillContainer isActive={isActive}>{count}</PillContainer>
}

export default Pill
