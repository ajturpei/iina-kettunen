import {draftMode} from 'next/headers'
import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getProjectData = async (id: string): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data, error} = await fetchGraphQL(
    `query projectEntryQuery {
      projectCollection(
        where: { galleryUrl: "${id}" },
        preview: ${isEnabled},
        limit: 1
      ) {
        items {
          sys {
            id
          }
          galleryUrl
          name
          year
          mainImage {
            url
            description
            contentfulMetadata {
              tags {
                name
              }
            }
          }
          projectDescription
          longDescription
          collectionDetails {
            json
          }
          collectionType
          galleryReferenceCollection(limit: 50) {
            items {
              galleryName
              layoutType
              imagesCollection {
                items {
                  description
                  url
                  contentfulMetadata {
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    isEnabled
  )

  return data?.projectCollection?.items[0]
}
