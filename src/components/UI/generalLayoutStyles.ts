'use client'

import styled from 'styled-components'

export const MainContainer = styled.main`
  flex-grow: 1;
`

export const Divider = styled.div`
  border-top: 1px solid ${({theme}) => theme.color.background};
  height: 1px;
  width: 100%;
  padding-top: ${({theme}) => theme.spacing.xmedium};
`
