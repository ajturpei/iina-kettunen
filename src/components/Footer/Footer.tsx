'use client'

import {Divider} from '../UI/generalLayoutStyles'
import {
  FooterContainer,
  FooterContentList,
  FooterContentWrapper,
  FooterHeader,
  CopyrightWrapper,
} from './FooterStyles'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <Divider />
      <FooterContentWrapper>
        <FooterHeader>Iina Kettunen</FooterHeader>
        <FooterContentList>
          <li>+358 (0)44 5320314</li>
          <li>iina@iinakettunen.com</li>
          <li>@iinakettunen</li>
        </FooterContentList>
        <CopyrightWrapper>© 2016—{year}</CopyrightWrapper>
      </FooterContentWrapper>
    </FooterContainer>
  )
}
