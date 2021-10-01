import SignInButton from '../SignInButton'
import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <div>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className='active' href="http://">Home</a>
                    <a href="http://">Posts</a>
                </nav>

                <SignInButton />
            </div>
        </Container>
    )
}