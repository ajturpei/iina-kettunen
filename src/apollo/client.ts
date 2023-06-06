import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'

declare global {
  interface Window {
    __APOLLO_STATE__: any
  }
}

const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
const link = (preview = false) =>
  createHttpLink({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
  })

const serverSideClient = (preview = false) =>
  new ApolloClient({
    ssrMode: true,
    uri,
    link: link(preview),
    cache: new InMemoryCache(),
  })

const clientSideClient = (preview = false) =>
  new ApolloClient({
    cache: new InMemoryCache().restore(window?.__APOLLO_STATE__),
    link: link(preview),
    uri,
  })

export {serverSideClient, clientSideClient}
