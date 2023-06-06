'use client'

import {
  brownTheme,
  darkTheme,
  greenTheme,
  lightTheme,
} from 'src/theme/themeConfig'
import {ThemeProvider} from 'styled-components'
import {usePathname} from 'next/navigation'
import path from 'path'
import {matchExact} from 'src/components/utils'

const themes = [
  {pathName: '/', theme: lightTheme},
  {pathName: '/about', theme: greenTheme},
  {pathName: '/product-design', theme: darkTheme},
  {pathName: '/set-design', theme: brownTheme},
  {pathName: '/contact', theme: greenTheme},
]

export default function ThemeStyled({children}: {children: React.ReactNode}) {
  const currentPath = usePathname()
  const {theme} = themes.find(({pathName}) =>
    matchExact(pathName, currentPath)
  ) ?? {theme: lightTheme}
  console.log(currentPath)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
