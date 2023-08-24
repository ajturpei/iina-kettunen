import {draftMode} from 'next/headers'
import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getProjectData = async (id: string): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query projectEntryQuery {
      project(id: "${id}", preview:${isEnabled}) {
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
        longDescription
        collectionDetails {
          json
        }
        collectionType
        galleryReferenceCollection {
          items {
            galleryName
            layoutType
            imagesCollection {
              items {
                description
                url
              }
            }
          }
        }
      }
    }`,
    isEnabled
  )

  return data?.project
}
