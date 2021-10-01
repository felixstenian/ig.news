import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { Button } from './styles';

export default function SignInButton() {
  const isUserLoggedId = true;

  return isUserLoggedId ? (
    <Button type='button'>
      <FaGithub color="#04d361" />
      Felix Stenian
      <FiX color="#737380" className='closeIcon' />
    </Button>
  ) : (
    <Button type='button'>
      <FaGithub color="#eba417" />
      Sign in with Github
    </Button>
  )
}