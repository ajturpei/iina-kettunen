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
import Script from 'next/script'

const manRope = Manrope({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iinakettunen.com'),
  title: 'Designer Iina Kettunen | Product, Furniture and Set Design',
  description:
    'Product and furniture designer with passion for well-thought aesthetics of everyday life.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [
      {
        url: 'https://www.iinakettunen.com/iina_og.png',
      },
    ],
  },
}

const gtmEnabled = process.env.NODE_ENV !== 'development'

export default function RootLayout({children}: {children: React.ReactNode}) {
  const {isEnabled} = draftMode()
  return (
    <>
      {gtmEnabled && (
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QN0LBNKEDG" />
      )}
      {gtmEnabled && (
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-QN0LBNKEDG');
      `}
        </Script>
      )}
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
    </>
  )
}
