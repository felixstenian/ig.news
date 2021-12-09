import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import Head from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"

import { Main, ContainerPost, ContentPost } from './stylesPost';


interface PostProps {
  post: {
    slug: string,
    title: string,
    content: string,
    updatedAt: string
  }
}

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <Main>
        <ContainerPost>
          <h1> {post.title} </h1>
          <time> {post.updatedAt} </time>
          <ContentPost dangerouslySetInnerHTML={{ __html: post.content }} />
        </ContainerPost>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params

  // Redirecionando usuário caso não tenha assinatura ativa
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('publication', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }
}

export default Post