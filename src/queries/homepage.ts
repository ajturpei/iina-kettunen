import fetchGraphQL from 'src/lib/fetchGraphQL'
import {IKettunenRautioFields} from '../../contentful/__generated__/types'

export const getHomePageContent = async (preview: boolean): Promise<any> => {
  const {data} = await fetchGraphQL(
    `query {
      setDesignShowcase:projectCollection(limit: 20, order:order_ASC, , where: {collectionType_contains_all: "set"}) {
        total
        items {
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
          }
          description
        }
      }
      productDesignShowcase:projectCollection(limit: 20, order:order_ASC, , where: {collectionType_contains_all: "product"}) {
        total
        items {
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
    preview
  )

  return {
    setDesignShowcase: data.setDesignShowcase,
    homepage: data.homepageCollection,
    productDesignShowcase: data.productDesignShowcase,
  }
}