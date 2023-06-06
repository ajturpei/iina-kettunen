import styled from 'styled-components'

type PillProps = {
  count: number
  active: string
}

const PillContainer = styled.div<{active: string}>`
  background: ${({theme, active}) => (active === 'true' ? theme.text : 'none')};
  border: 1px solid ${({theme}) => theme.color.text};
  border-radius: 1rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${({theme, active}) =>
    active === 'true' ? theme.background : theme.text};
`

const Pill = ({count, active}: PillProps) => {
  return <PillContainer active={active}>{count}</PillContainer>
}

export default Pill
