import { Link as ChakraLink, Text, useColorMode } from '@chakra-ui/react'

export type LinkProps = {
  title: string
  href: string
}

const Link = ({ title, href }: LinkProps) => {
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'

  return (
    <ChakraLink
      href={href}
      isExternal
      display="flex"
      alignItems="center"
      justifyContent="center"
      background={
        isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
      }
      w={{ base: '31.2rem', lg: '540px' }}
      maxW="100%"
      h="5.6rem"
      border={
        isDarkTheme
          ? '0.1rem solid rgba(255, 255, 255, 0.5)'
          : '0.1rem solid rgba(0, 0, 0, 0.5)'
      }
      borderRadius="0.8rem"
      backdropFilter="blur(0.4rem)"
      color="white"
      _hover={{
        textDecor: 'none',
        border: isDarkTheme ? '1.5px solid #FFFFFF' : '1.5px solid #000',
        background: isDarkTheme
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.05)'
      }}
    >
      <Text
        textAlign="center"
        fontWeight="500"
        fontSize="1.6rem"
        lineHeight="2.4rem"
        color={isDarkTheme ? 'white' : 'black'}
      >
        {title}
      </Text>
    </ChakraLink>
  )
}

export default Link
