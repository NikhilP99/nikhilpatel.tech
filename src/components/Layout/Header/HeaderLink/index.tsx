import Link from "@/components/Link"
import { Route } from "next/types"

type HeaderLinkProps = {
  href: Route | URL
  title: string
  key?: any
}

const HeaderLink = (props: HeaderLinkProps) => {
  const {href, title} = props
  return (
    <Link
      key="tags"
      href={href}
      className="p-1 font-medium sm:p-4 text-type-primary hover:text-accent-dark duration-200"
    >
      {title}
    </Link>
  )
}

export default HeaderLink