import fetchGraphQL from 'src/lib/fetchGraphQL'
import {IKettunenRautioFields} from '../../contentful/__generated__/types'

export const getProjectCollectionData = async (
  collection: 'set' | 'product',
  preview: boolean
): Promise<any> => {
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
    preview
  )

  return data?.projectCollection
}

export const getProjectCollectionCount = async (
  collection: 'set' | 'product',
  preview: boolean
): Promise<any> => {
  const {data} = await fetchGraphQL(
    `query projectCollectionQuery {
      projectCollection(where:{collectionType_contains_all: "${collection}"}) {
        total
      }
    }`,
    preview
  )

  return data?.projectCollection.total
}
