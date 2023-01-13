import { Switch, useColorMode } from '@chakra-ui/react'

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Switch
      size="lg"
      onChange={toggleColorMode}
      isChecked={colorMode === 'light'}
    />
  )
}

export default SwitchTheme
