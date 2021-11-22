import Link from 'next/link'
import SignInButton from '../SignInButton'
import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <div>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href='/'>
                        <a className='active' >Home</a>
                    </Link>
                    <Link href='/posts' prefetch>
                        <a>Posts</a>
                    </Link>
                </nav>

                <SignInButton />
            </div>
        </Container>
    )
}