import Link from "@/components/Link"
import { IconType } from "react-icons"
import { Route } from "next/types"

type FooterLinkProps = {
  href: Route | URL 
  Icon: IconType,
  key?: any
}

const FooterLink = (props: FooterLinkProps) => {
  const {href, Icon} = props
  return (
    <Link href={href} className="text-type-secondary hover:text-accent-dark duration-200">
      <Icon size={16} />
    </Link>
  )
}

export default FooterLink