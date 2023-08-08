'use client'

import {
  HeaderContainer,
  Navigation,
  LinkContainer,
  MobileNav,
  MobileLinks,
  IMG,
  MobileNavButton,
  MobileLinkContainer,
} from './HeaderStyles'
import {Divider} from '../UI/generalLayoutStyles'
import {createRef, useEffect, useRef, useState} from 'react'
import HeaderLinks from './HeaderLinks'
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && ref.current) {
      isOpen && ref.current
        ? disableBodyScroll(ref.current)
        : clearAllBodyScrollLocks()
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen, ref])

  return (
    <HeaderContainer ref={ref}>
      <Divider />
      <Navigation>
        <LinkContainer isOpen={isOpen}>
          <HeaderLinks />
          <MobileNavButton onClick={handleOpen}>
            <IMG src="/burger.svg" alt="Toggle mobile menu" />
          </MobileNavButton>
        </LinkContainer>
        {isOpen && (
          <MobileNav isOpen={isOpen}>
            <MobileLinkContainer>
              <HeaderLinks isMobile onClick={handleOpen} mainOnly />
              <MobileNavButton onClick={handleOpen}>
                <IMG src="/close-button.svg" alt="Toggle mobile menu" />
              </MobileNavButton>
            </MobileLinkContainer>
            <MobileLinks>
              <Divider />
              <HeaderLinks noMain={true} isMobile onClick={handleOpen} />
            </MobileLinks>
          </MobileNav>
        )}
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
