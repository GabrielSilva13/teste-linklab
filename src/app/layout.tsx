import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { DM_Sans, Roboto } from 'next/font/google'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import { ReactQueryProvider } from './ReactQueryProvider'
import { ReduxProvider } from '@/store/provider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
})
export const metadata: Metadata = {
  title: 'Teste LinkLab',
  description: 'Teste realizado com carinho para a LinkLab',
}

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" id="root">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>

      <body className={`${dmSans.variable} ${roboto.variable}`}>
        <ReactQueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
