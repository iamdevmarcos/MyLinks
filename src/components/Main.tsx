import { Box, Flex, VStack } from '@chakra-ui/react'
import { externalLinks } from 'mocks/externalLinks'
import { socialLinks } from 'mocks/socialLinks'

import Copyright from './Copyright'
import Link from './Link'
import Profile from './Profile'
import SocialLink from './SocialLink'
import SwitchTheme from './SwitchTheme'
import Wrapper from './Wrapper'

const Main = () => (
  <Wrapper>
    <VStack w="100%">
      <Box mt="4rem" mb="1rem" aria-label="Perfil">
        <Profile
          name="Marcos Mendes"
          photoUrl="https://github.com/iamdevmarcos.png"
        />
      </Box>

      <SwitchTheme />

      <VStack aria-label="Lista de Links" p="2.4rem" gap="1.6rem" maxW="100%">
        {externalLinks.map(({ title, href }, index) => (
          <Link key={index} title={title} href={href} />
        ))}
      </VStack>

      <Flex
        as="nav"
        aria-labelledby="Social Media"
        p="2.4rem"
        gap="3.5rem"
        maxW="100%"
      >
        {socialLinks.map(({ href, icon }, index) => (
          <SocialLink key={index} href={href} icon={icon} />
        ))}
      </Flex>

      <Flex as="footer" pb="5rem" pt="2.5rem">
        <Copyright />
      </Flex>
    </VStack>
  </Wrapper>
)

export default Main
