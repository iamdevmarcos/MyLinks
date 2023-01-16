import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

import { SocialLinkProps } from 'components/SocialLink'

export const socialLinks: SocialLinkProps[] = [
  { href: 'https://github.com/iamdevmarcos', icon: AiFillGithub },
  { href: 'https://www.linkedin.com/in/iamdevmarcos/', icon: AiFillLinkedin },
  { href: 'https://www.instagram.com/marcosdev.me/', icon: FiInstagram },
  { href: 'mailto:marcosdev.me@gmail.com', icon: MdEmail }
]
