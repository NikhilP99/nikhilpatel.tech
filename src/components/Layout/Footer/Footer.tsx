import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 divide-y divide-gray-200 dark:divide-gray-700">
        {/* Spotify component here */}
        <div></div>
        <div className="mt-2 flex flex-col-reverse items-center py-2 md:flex-row md:justify-between">
          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <div>Nikhil Patel</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="flex space-x-4 py-2">
            <Link href="/"> Email </Link>
            <Link href="/"> Github </Link>
            <Link href="/"> Twitter </Link>
            <Link href="/"> LinkedIn </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer