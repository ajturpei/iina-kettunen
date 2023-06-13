import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getHomePageContent = async (preview: boolean): Promise<any> => {
  const {data} = await fetchGraphQL(
    `query {
      setDesignShowcase:projectCollection(limit: 20, order:order_ASC, where: {
        AND: [
          { frontpageGallery: true },
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
          }
          description
        }
      }
      productDesignShowcase:projectCollection(limit: 20, order:order_ASC, where: {
        AND: [
          { frontpageGallery: true },
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
    preview
  )

  return {
    setDesignShowcase: data.setDesignShowcase,
    homepage: data.homepageCollection,
    productDesignShowcase: data.productDesignShowcase,
  }
}
