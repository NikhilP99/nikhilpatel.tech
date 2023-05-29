import { FOOTER_LINKS } from "@/config/links"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 divide-y divide-background-secondary">
        {/* Spotify component here */}
        <div></div>
        <div className="mt-2 flex flex-col-reverse items-center py-2 md:flex-row md:justify-between">
          <div className="flex space-x-1 text-sm text-type-secondary">
            <div>Nikhil Patel</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="flex flex-row items-center text-sm space-x-4 py-2">
            {FOOTER_LINKS.map((link, i) => <FooterLink href={link.href} Icon={link.icon} key={i} />)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer