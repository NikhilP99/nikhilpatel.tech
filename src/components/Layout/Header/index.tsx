import ThemeSwitcher from "@/components/ThemeSwitcher"
import { HEADER_LINKS } from "@/config/links"
import Link from "@/components/Link"

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-8">
      <Link href="/" aria-label="Nikhil Patel">
        <div className="flex items-center justify-between">
          <div className="hidden font-russo h-6 text-2xl font-semibold sm:block">
            NP
          </div>
        </div>
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {HEADER_LINKS.map((link) => (
            <Link
              key="tags"
              href={link.href}
              className="p-1 font-medium sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header