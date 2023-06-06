'use client'

import Link from 'next/link'
import Pill from '../Pill'
import {Divider} from '../UI/generalLayoutStyles'
import {SubNavLinkListElement, SubNavList} from './SubNavigationStyles'
import {usePathname} from 'next/navigation'
import {matchExact} from '../utils'

const subLinks = [
  {pathName: '/product-design', label: 'Product Design'},
  {pathName: '/set-design', label: 'Set Design'},
]

export const SubNavigation = () => {
  const currentPath = usePathname()

  return (
    <>
      <Divider />
      <SubNavList>
        {subLinks.map(({pathName, label}, ind: number) => {
          const isActive = matchExact(currentPath, pathName)
          console.log(currentPath, isActive, label)
          return (
            <SubNavLinkListElement key={`${pathName}-${ind}`}>
              <Link href={pathName}>
                <Pill count={12} isActive={isActive} /> {label}
              </Link>
            </SubNavLinkListElement>
          )
        })}
      </SubNavList>
    </>
  )
}
