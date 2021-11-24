import ActiveLink from '../ActiveLink'
import SignInButton from '../SignInButton'
import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <div>
                <img src='/images/logo.svg' alt='ig.news' />
                <nav>
                    <ActiveLink activeClassName='active' href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName='active' href='/posts' prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </Container>
    )
}