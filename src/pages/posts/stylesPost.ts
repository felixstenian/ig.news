import styled from "styled-components";

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const ContainerPost = styled.article`
  max-width: 720px;
  margin: 5rem auto 0;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  time {
    display: block;
    font-size: 1rem;
    color: var(--gray-300);
    margin-top: 1.5rem;
  }
`

export const ContentPost = styled.div`
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.125rem;
  color: var(--gray-100);

  h2, h3 {
    margin-top: 2rem;
  }

  p, ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }

`

export const PreviewContentPost = styled(ContentPost)`
  background: linear-gradient(var(--gray-100), transparent);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

export const ContinueReading = styled.div`
  padding: 2rem;
  text-align: center;
  background: var(--gray-850);
  border-radius: 100px;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 4rem 0 2rem;

  a {
    color: var(--yellow-500);
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`