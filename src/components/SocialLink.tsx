import type { IconType } from 'react-icons'

import { Icon, Link, useColorMode } from '@chakra-ui/react'

export type SocialLinkProps = {
  href: string
  icon: IconType
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'

  return (
    <Link href={href} isExternal rel="noreferrer">
      <Icon
        as={icon}
        color={isDarkTheme ? 'white' : 'black'}
        w="2.4rem"
        h="2.4rem"
      />
    </Link>
  )
}

export default SocialLink
