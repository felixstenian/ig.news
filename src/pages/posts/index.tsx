import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import { Main, PostList } from './styles';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <Main>
        <PostList>
          <a href='#'>
            <time>18 de novembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores fuga. Adipisci numquam atque odit eaque earum. Illum, rerum ullam doloribus sed eius totam. Animi at odit reprehenderit illum laudantium?</p>
          </a>
          <a href='#'>
            <time>18 de novembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores fuga. Adipisci numquam atque odit eaque earum. Illum, rerum ullam doloribus sed eius totam. Animi at odit reprehenderit illum laudantium?</p>
          </a>
          <a href='#'>
            <time>18 de novembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores fuga. Adipisci numquam atque odit eaque earum. Illum, rerum ullam doloribus sed eius totam. Animi at odit reprehenderit illum laudantium?</p>
          </a>
        </PostList>
      </Main>
    </>
  );
}

// Gerando página de forma statica
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })
  console.log('posts')
  console.log(response)
  return {
    props: {

    }
  }
}

export default Posts;