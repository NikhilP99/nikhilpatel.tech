import './globals.css'
import { Poppins, Roboto_Mono, Russo_One } from 'next/font/google'
import LayoutWrapper from '@/components/Layout/LayoutWrapper'
import { WithChildren } from '@/types/common'
import ThemeProvider from '@/components/ThemeProvider'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight : ["400"],
  variable: "--font-poppins"
})

const roboto_mono = Roboto_Mono({ 
  subsets: ['latin'], 
  weight : ["400"],
  variable: "--font-roboto-mono"
})

const russo_one = Russo_One({ 
  subsets: ['latin'], 
  weight : ["400"],
  variable: "--font-russo-one"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(props: WithChildren) {
  const { children } = props
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable} ${russo_one.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
