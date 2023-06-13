'use client'

import {usePathname} from 'next/navigation'
import {
  HeaderContainer,
  Navigation,
  LinkContainer,
  LinkElement,
  MobileNav,
} from './HeaderStyles'

import Link from 'next/link'
import {matchExact} from '../utils'
import {Divider} from '../UI/generalLayoutStyles'
import {useState} from 'react'

const links = [
  {
    pathName: ['/'],
    label: 'IINA KETTUNEN',
    description:
      'Product and furniture designer with passion for well-thought aesthetics of everyday life.',
  },
  {
    pathName: ['/product-design', '/set-design', '/set-design'],
    label: 'Work',
    description: null,
  },

  {
    pathName: ['/about'],
    label: 'About',
    description: null,
  },
  {
    pathName: ['/contact'],
    label: 'Contact',
    description: null,
  },
]

const Header = () => {
  const currentPath = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
      <Divider />
      <Navigation>
        <LinkContainer>
          {links.map(({pathName, label, description}, ind: number) => {
            const isActive = pathName.some((name: string) =>
              matchExact(currentPath, name)
            )
            const firstel = ind === 0
            return (
              <LinkElement
                firstel={firstel.toString()}
                active={isActive.toString()}
                key={`navigation-el-${ind}`}
              >
                <Link href={pathName[0]}>{label}</Link>
                {description && <p>{description}</p>}
              </LinkElement>
            )
          })}
          <MobileNav onClick={handleOpen}>
            <img src="/burger-menu.svg" alt="Toggle mobile menu" />
          </MobileNav>
        </LinkContainer>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
