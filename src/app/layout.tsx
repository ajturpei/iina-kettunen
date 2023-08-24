import {Manrope} from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'
import {
  MainContainer,
  PreviewBanner,
} from 'src/components/UI/generalLayoutStyles'
import Header from 'src/components/Header/Header'
import ThemeStyled from './theme-provider'
import {Footer} from 'src/components/Footer/Footer'

import {Metadata} from 'next'
import {draftMode} from 'next/headers'

const manRope = Manrope({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica'],
})

export const metadata: Metadata = {
  title: 'Designer Iina Kettunen | Product, Furniture and Set Design',
  description:
    'Product and furniture designer with passion for well-thought aesthetics of everyday life.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  const {isEnabled} = draftMode()
  return (
    <html lang="en" className={manRope.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeStyled>
            <GlobalStyle />
            {isEnabled && (
              <PreviewBanner>
                <h4>Preview mode</h4>
              </PreviewBanner>
            )}
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
          </ThemeStyled>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
