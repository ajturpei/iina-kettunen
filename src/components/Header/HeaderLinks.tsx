import Link from 'next/link'
import {matchExact, matchPartially} from '../utils'
import {LinkElement} from './HeaderStyles'
import {usePathname} from 'next/navigation'

const links = [
  {
    pathName: ['/'],
    label: 'IINA KETTUNEN',
    description:
      'Designer with passion for well-thought aesthetics of everyday life.',
  },
  {
    pathName: ['/product-design', '/set-design'],
    label: 'Work',
    matchPartial: true,
  },

  {
    pathName: ['/about'],
    label: 'About',
  },
  {
    pathName: ['/contact'],
    label: 'Contact',
  },
]

export const HeaderLinks = ({
  isMobile = false,
  onClick,
  mainOnly = false,
  noMain = false,
}: {
  isMobile?: boolean
  mainOnly?: boolean
  onClick?: () => void
  noMain?: boolean
}) => {
  const currentPath = usePathname()
  const selectedLinks = mainOnly ? [links[0]] : links

  return selectedLinks.map(
    ({pathName, label, description, matchPartial}, ind: number) => {
      const isActive = pathName.some((name: string) => {
        if (matchPartial) {
          return matchPartially(currentPath, name)
        }
        return matchExact(currentPath, name)
      })
      const firstel = ind === 0
      return (
        <LinkElement
          firstel={firstel.toString()}
          active={isActive.toString()}
          key={`navigation-el-${ind}`}
          nomain={noMain.toString()}
          onClick={onClick}
        >
          <Link href={pathName[0]} onClick={onClick}>
            {label}
          </Link>
          {description && !isMobile && <p>{description}</p>}
        </LinkElement>
      )
    }
  )
}

export default HeaderLinks
