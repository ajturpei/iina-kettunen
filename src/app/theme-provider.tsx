'use client'

import {
  brownTheme,
  darkTheme,
  greenTheme,
  lightTheme,
  whiteTheme,
} from 'src/theme/themeConfig'
import {ThemeProvider} from 'styled-components'
import {usePathname} from 'next/navigation'
import path from 'path'
import {matchExact} from 'src/components/utils'
import {match} from 'assert'

const themes = [
  {pathName: '/', theme: lightTheme, exact: true},
  {pathName: '/about', theme: whiteTheme},
  {pathName: '/product-design', theme: darkTheme},
  {pathName: '/set-design', theme: brownTheme},
  {pathName: '/contact', theme: greenTheme},
]

export default function ThemeStyled({children}: {children: React.ReactNode}) {
  const currentPath = usePathname()
  const {theme} = themes.find(({pathName, exact = false}) =>
    exact ? matchExact(pathName, currentPath) : currentPath.includes(pathName)
  ) ?? {theme: lightTheme}
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
