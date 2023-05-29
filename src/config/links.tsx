import { Route } from "next/types"
import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'

type HeaderLinkArray = {
  href: Route | URL
  title: string
}[]

export const HEADER_LINKS: HeaderLinkArray = [
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
    href: "/about"
  }
]

type FooterLinkArray = {
  href: Route | URL
  icon: IconType
}[]

export const FOOTER_LINKS: FooterLinkArray = [
  {
    href: "/",
    icon: FiGithub
  },
  {
    href: "/",
    icon: FiLinkedin
  },
  {
    href: "/",
    icon: SiGmail
  },
  {
    href: "/",
    icon: FiTwitter
  },
  
]