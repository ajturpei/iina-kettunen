'use client'

import {usePathname} from 'next/navigation'
import {
  HeaderContainer,
  Navigation,
  LinkContainer,
  LinkElement,
} from './HeaderStyles'

import Link from 'next/link'
import {matchExact} from '../utils'
import {Divider} from '../UI/generalLayoutStyles'

const links = [
  {
    pathName: '/',
    label: 'IINA KETTUNEN',
    description:
      'Product and furniture designer with passion for well-thought aesthetics of everyday life.',
  },
  {
    pathName: '/product-design',
    label: 'Work',
    description: null,
  },

  {
    pathName: '/about',
    label: 'About',
    description: null,
  },
  {
    pathName: '/contact',
    label: 'Contact',
    description: null,
  },
]

const Header = () => {
  const currentPath = usePathname()

  return (
    <HeaderContainer>
      <Divider />
      <Navigation>
        <LinkContainer>
          {links.map(({pathName, label, description}, ind: number) => {
            const isActive = matchExact(currentPath, pathName)
            const firstel = ind === 0
            return (
              <LinkElement
                firstel={firstel.toString()}
                active={isActive.toString()}
                key={`navigation-el-${ind}`}
              >
                <Link href={pathName}>{label}</Link>
                {description && <p>{description}</p>}
              </LinkElement>
            )
          })}
        </LinkContainer>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
