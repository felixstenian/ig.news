import { Button } from './styles';
import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/srtipe-js';
import { useRouter } from 'next/router';
interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
      return
    }

    // Redirecionando usuário caso já tenha assinatura ativa
    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }
  return (
      <Button
        type="button"
        onClick={handleSubscribe}
      >
          Subscribe now
      </Button>
  );
}