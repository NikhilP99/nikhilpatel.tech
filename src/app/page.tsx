export default function Home() {
  return (
    <div className="flex-1 flex h-full flex-col justify-center px-7">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <p className={`text-lg leading-3 font-mono text-gray-500 dark:text-gray-400`}>Hi, my name is</p>
        <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-8xl md:leading-14">
          Nikhil Patel
        </h1>
        <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Im a software developer
        </h3>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        A blog created with Next.js and Tailwind
        </p>
      </div>
    </div>
  )
}
