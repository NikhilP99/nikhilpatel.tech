import NextLink from 'next/link'

// TODO: type of props?
const Link = (props: any) => {
  const { href, children, ...rest } = props

  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return <NextLink href={href} {...rest}>{children}</NextLink>
  }

  return <NextLink target='_blank' rel="noopener noreferrer" href={href}>{children}</NextLink>
}

export default Link