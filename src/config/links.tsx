import { Route } from "next/types"

type HeaderLink = {
  href: Route | URL
  title: string
}[]

export const HEADER_LINKS: HeaderLink = [
  {
    title: "Blog",
    href: "/"
  },
  {
    title: "Tags",
    href: "/"
  },
  {
    title: "About",
    href: "/"
  }
]