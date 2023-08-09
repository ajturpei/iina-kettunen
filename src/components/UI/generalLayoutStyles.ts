'use client'

import {device} from 'src/theme/breakpoints'
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

export const Ingress = styled.h3`
  font-size: ${({theme}) => theme.spacing.xmedium};
  line-height: 1.25;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    font-size: ${({theme}) => theme.spacing.slarge};
    margin-bottom: 4rem;
  }
`
export const Paragraph = styled.p`
  margin-bottom: 1rem;
`

export const TwoColumns = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`

export const SmallLinkWrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 3rem;
  a {
    font-size: 1rem;
  }
`
