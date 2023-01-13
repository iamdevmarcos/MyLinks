import { Flex, useColorMode } from '@chakra-ui/react'

export type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'

  const customStyles = {
    bg: isDarkTheme
      ? {
          base: "url('/img/dark-bg/mobile.png')",
          lg: "url('/img/dark-bg/desktop.png')"
        }
      : {
          base: "url('/img/light-bg/mobile.png')",
          lg: "url('/img/light-bg/desktop.png')"
        }
  }

  return (
    <Flex
      backgroundImage={customStyles.bg}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="cover"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  )
}

export default Wrapper
