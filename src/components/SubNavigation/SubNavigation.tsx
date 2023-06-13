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

export const SubNavigation = ({
  setCount,
  productCount,
}: {
  setCount: number
  productCount: number
}) => {
  const currentPath = usePathname()

  return (
    <>
      <Divider />
      <SubNavList>
        {subLinks.map(({pathName, label}, ind: number) => {
          const active = matchExact(currentPath, pathName)
          return (
            <SubNavLinkListElement key={`${pathName}-${ind}`}>
              <Link href={pathName}>
                <Pill
                  count={ind === 0 ? productCount : setCount}
                  active={active.toString()}
                />{' '}
                {label}
              </Link>
            </SubNavLinkListElement>
          )
        })}
      </SubNavList>
    </>
  )
}
