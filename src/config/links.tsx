import { Route } from "next/types"
import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'

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
    href: "/about"
  }
]

type FooterLink = {
  href: Route | URL
  icon: IconType
}[]

export const FOOTER_LINKS: FooterLink = [
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