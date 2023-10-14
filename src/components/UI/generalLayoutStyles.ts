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

export const Ingress = styled.h3<{small?: boolean}>`
  font-weight: 300;
  font-size: ${({theme, small}) =>
    small ? theme.spacing.medium : theme.spacing.xmedium};
  line-height: 1.25;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    font-size: ${({theme, small}) =>
      small ? theme.spacing.medium : theme.spacing.slarge};
    margin-bottom: 4rem;
  }
`

export const ParagraphHeading = styled.span`
  font-size: ${({theme}) => theme.spacing.medium};
  text-transform: uppercase;
  display: block;
  margin-bottom: 0;
  line-height: 1.25;
`
export const Paragraph = styled.p<{nounderline?: boolean}>`
  margin-bottom: 1rem;
  a {
    border-bottom: ${({nounderline, theme}) =>
      !nounderline ? `1px solid ${theme.color.text}` : 'none'};
    font-weight: 300;
    font-style: normal;
  }
`

export const TwoColumns = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    gap: 7.25rem;
  }
`

export const ThreeColumns = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptop} {
    gap: 7.25rem;
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

export const Caption = styled.div<{$header?: 'true'}>`
  margin-top: 0.25rem;
  text-align: left;
  display: inline-block;
  margin-right: 50px;
  font-size: 1rem;
  font-weight: ${({$header}) => ($header === 'true' ? '700' : '500')};
  text-transform: ${({$header}) =>
    $header === 'true' ? 'uppercase' : 'unset'};
`

export const PreviewBanner = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  text-align: center;
  padding: 0.5rem;
  background-color: rgba(44, 44, 44, 0.9);
  h4 {
    color: #fff;
    text-align: center;
    width: 100%;
    max-width: 100%;
    font-size: 1.25rem;
  }
  text-align: center;
  color: #fff;
  z-index: 1000000;
`
