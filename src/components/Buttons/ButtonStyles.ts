import styled from 'styled-components'

export const Switch = styled.div<{$on: boolean}>`
  background-color: ${({theme, $on}) =>
    $on ? theme.color.buttonGreen : theme.color.lightGreen};
  border: 1px solid ${({theme}) => theme.color.black};
  display: inline-block;
  width: 35px;
  height: 20px;
  border-radius: 100px;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: ${({theme}) => theme.color.black};
    ${({$on}) => ($on ? 'right:4px' : 'left: 4px')};
    top: 3px;
  }
`

export const SwitchText = styled.p`
  color: ${({theme}) => theme.text};
  display: inline;
  margin-left: 1rem;
  font-size: 1rem;
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`
