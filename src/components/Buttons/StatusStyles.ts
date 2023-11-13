import styled from 'styled-components'

export const StatusText = styled.p<{
  $color?: string
}>`
  color: ${({theme, $color}) => $color || theme.color.text};
  display: inline;
  font-size: 1rem;
  text-transform: uppercase;
`

export const StatusContainer = styled.div<{
  $background?: string
  $color?: string
}>`
  border: ${({theme, $color, $background}) =>
    !$background ? `1px solid ${$color ?? theme.text}` : 'none'};
  background-color: ${({$background}) => $background};
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.125rem 1rem;
`
