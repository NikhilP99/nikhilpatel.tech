import ThemeSwitcher from "@/components/ThemeSwitcher"
import { HEADER_LINKS } from "@/config/links"
import Link from "@/components/Link"
import HeaderLink from "./HeaderLink"

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-8">
      <Link href="/" aria-label="Nikhil Patel">
        <div className="flex items-center justify-between">
          <div className="hidden font-russo h-6 text-2xl font-semibold sm:block text-accent-medium hover:text-accent-dark duration-200">
            NP
          </div>
        </div>
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {HEADER_LINKS.map((link) => <HeaderLink key={link.title} title={link.title} href={link.href} />)}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header