import { stripe } from './../../../services/stripe';
import { query as q } from 'faunadb'
import { fauna } from './../../../services/fauna';

export async function saveSubscription(
  subscriptionId: string,
  custonerId: string,
  createAction = false
) {
  // Buscar o usuário no banco do Fauna com o ID {customerId}
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          custonerId
        )
      )
    )
  )

  // Pegando todos os dados da subscription
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  // Pegango dados relevantes para salvar no FaundaDB
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,

  }

  // Salvando/Atualizando os dados da subscription no FaunaDB
  if (createAction) {
    await fauna.query(
      q.Create(
        q.Collection('subscriptions'),
        { data: subscriptionData }
      )
    )
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('subscription_by_id'),
              subscriptionId
            )
          )
        ),
        { data: subscriptionData }
      )
    )
  }
}