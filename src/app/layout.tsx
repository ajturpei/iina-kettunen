import {Manrope} from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'
import {MainContainer} from 'src/components/UI/generalLayoutStyles'
import Header from 'src/components/Header/Header'
import ThemeStyled from './theme-provider'

const manRope = Manrope({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica'],
})

export const metadata = {
  title: 'Iina Kettunen',
  description:
    'Product and furniture designer with passion for well-thought aesthetics of everyday life.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={manRope.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeStyled>
            <MainContainer>
              <GlobalStyle />
              <Header />
              {children}
            </MainContainer>
          </ThemeStyled>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
