import {draftMode} from 'next/headers'
import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getHomePageContent = async (): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query {
      setDesignShowcase:projectCollection(limit: 20, order:order_ASC, preview:${isEnabled}, where: {
        AND: [
          { collectionType_contains_all: "set" }
        ]
      }) {
        total
        items {
          sys {
            id
          }
          name
          year
          mainImage {
            url
            description
          }
          projectDescription
          frontpageGallery
          galleryUrl
        }
      }
      homepageCollection(limit:1) {
        items {
          header
          image {
            url
            description
            contentfulMetadata {
              tags {
                name
              }
            }
          }
          description
          imageUrl
        }
      }
      productDesignShowcase:projectCollection(limit: 20, order:order_ASC, preview:${isEnabled}, where: {
        AND: [
          { collectionType_contains_all: "product" }
        ]
      }) {
        total
        items {
          sys {
            id
          }
          name
          year
          mainImage {
            url
            description
          }
          projectDescription
          frontpageGallery
          galleryUrl
        }
      }
    }`,
    isEnabled
  )

  return {
    setDesignShowcase: data?.setDesignShowcase,
    homepage: data?.homepageCollection,
    productDesignShowcase: data?.productDesignShowcase,
  }
}
