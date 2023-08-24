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
        <FooterHeader>
          <a href="https://www.iinakettunen.com">Iina Kettunen</a>
        </FooterHeader>
        <FooterContentList>
          <li>+358 (0)44 5320314</li>
          <li>iina@iinakettunen.com</li>
          <li>
            <a href="https://www.instagram.com/iinakettunen/">@iinakettunen</a>
          </li>
        </FooterContentList>
        <CopyrightWrapper>© 2013—{year}</CopyrightWrapper>
      </FooterContentWrapper>
    </FooterContainer>
  )
}
