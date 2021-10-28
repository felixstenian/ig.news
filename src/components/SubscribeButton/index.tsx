import { Button } from './styles';
import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/srtipe-js';
interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
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