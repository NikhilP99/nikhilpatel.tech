import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <main className='flex-1'>
      <div className='divide-y-2 divide-background-secondary'>
        <div className="pt-6 pb-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-type-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello! 
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <AuthorCard />
          <div className="prose max-w-none pt-8 pb-8 text-type-secondary xl:col-span-2">
            <AboutContent />
          </div>
        </div>
        <Experience />
      </div>
    </main>
  )
}

const AuthorCard = () => {
  return (
    <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
      <Image
        src='/static/images/avatar.png'
        alt="avatar"
        width={192}
        height={192}
        className="h-48 w-48 rounded-full"
      />
      <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-type-primary">
        Nikhil Patel
      </h3>
      <div className="text-type-secondary">SDE</div>
      <div className="text-type-secondary">JIO</div>
      <div className="flex space-x-3 pt-6 text-type-secondary">
        <Link href="/"> Email </Link>
        <Link href="/"> Github </Link>
        <Link href="/"> Twitter </Link>
        <Link href="/"> LinkedIn </Link>
      </div>
    </div>
  )
}

const AboutContent = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  )
}

const Experience = () => {
  return (
    <div className="mt-10">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-type-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <div className="max-w-none pt-8 pb-8 xl:col-span-2">
        {/* TODO: Add experience section and component */}
      </div>
    </div>
  )
}


export default About