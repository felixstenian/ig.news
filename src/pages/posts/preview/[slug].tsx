import { useEffect } from 'react'
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { useSession } from "next-auth/client"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../../services/prismic"

import { Main, ContainerPost, PreviewContentPost, ContinueReading } from '../stylesPost';
import { useRouter } from 'next/router'


interface PostPreviewProps {
  post: {
    slug: string,
    title: string,
    content: string,
    updatedAt: string
  }
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <Main>
        <ContainerPost>
          <h1> {post.title} </h1>
          <time> {post.updatedAt} </time>
          <PreviewContentPost dangerouslySetInnerHTML={{ __html: post.content }} />

          <ContinueReading>
            Wanna continue reading?
            <Link href='/home'>
              <a href=''>Subscibe now 🤗</a>
            </Link>
          </ContinueReading>
        </ContainerPost>
      </Main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params


  const prismic = getPrismicClient()

  const response = await prismic.getByUID('publication', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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

export default PostPreview