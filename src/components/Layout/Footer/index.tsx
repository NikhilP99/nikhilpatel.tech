import Link from "@/components/Link"
import { FOOTER_LINKS } from "@/config/links"

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 divide-y divide-gray-200 dark:divide-gray-700">
        {/* Spotify component here */}
        <div></div>
        <div className="mt-2 flex flex-col-reverse items-center py-2 md:flex-row md:justify-between">
          <div className="flex space-x-1 text-sm">
            <div>Nikhil Patel</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="flex flex-row items-center text-sm space-x-4 py-2">
            {FOOTER_LINKS.map((link) => {
              const Icon = link.icon
              return <Link key={link.href} href={link.href}> <Icon size={16} /> </Link>
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer