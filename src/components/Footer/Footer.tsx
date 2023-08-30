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
          <li>
            <a href="tel:+3580445320314">+358 (0)44 5320314</a>
          </li>
          <li>
            <a href="mailto:iina@iinakettunen.com">iina@iinakettunen.com</a>
          </li>
          <li>
            <a href="https://www.instagram.com/iinakettunen/">@iinakettunen</a>
          </li>
        </FooterContentList>
        <CopyrightWrapper>© 2013—{year}</CopyrightWrapper>
      </FooterContentWrapper>
    </FooterContainer>
  )
}
