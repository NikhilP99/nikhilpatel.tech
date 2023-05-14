import { WithChildren } from '@/types/common'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = (props: WithChildren) => {
  const { children } = props
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <div className='flex flex-col min-h-screen justify-between'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWrapper