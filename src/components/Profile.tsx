import { VStack, Avatar, Text, useColorMode } from '@chakra-ui/react'

export type ProfileProps = {
  name: string
  photoUrl: string
}

const Profile = ({ name, photoUrl }: ProfileProps) => {
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'

  return (
    <VStack gap="0.8rem">
      <Avatar
        src={photoUrl}
        w="12rem"
        h="12rem"
        border={isDarkTheme ? '0.1rem solid white' : '0.1rem solid black'}
      />

      <Text
        fontWeight="500"
        fontSize="1.6rem"
        lineHeight="2.4rem"
        color={isDarkTheme ? 'white' : 'black'}
      >
        {name}
      </Text>
    </VStack>
  )
}

export default Profile
