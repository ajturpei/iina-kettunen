import {draftMode} from 'next/headers'
import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getProjectCollectionData = async (
  collection: 'set' | 'product'
): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query projectCollectionQuery {
      projectCollection(where:{collectionType_contains_all: "${collection}"},order:order_ASC) {
        total
        items {
          sys {
            id
          }
          name
          year
          order
          mainImage {
            url
            description
          }
        }
      }
    }`,
    isEnabled
  )

  return data?.projectCollection
}

export const getProjectCollectionCount = async (
  collection: 'set' | 'product'
): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query projectCollectionQuery {
      projectCollection(where:{collectionType_contains_all: "${collection}"}) {
        total
      }
    }`,
    isEnabled
  )

  return data?.projectCollection.total
}
