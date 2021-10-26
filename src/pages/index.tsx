import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import { Main } from './home'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Main>
        <section>
          <span> 👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </Main>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JftE6CuGbsqDVGZooCihCZX')

  // Se for usar mais dados do produto utilizar o expand
  // const price = await stripe.prices.retrieve('price_1JftE6CuGbsqDVGZooCihCZX', {
  //  expand: ['product']
  // })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    //revalidate: (60 * 60 * 24)
  }
}
