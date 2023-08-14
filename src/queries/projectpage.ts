import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getProjectData = async (
  id: string,
  preview: boolean
): Promise<any> => {
  const {data} = await fetchGraphQL(
    `query projectEntryQuery {
      project(id: "${id}") {
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
    preview
  )

  return data?.project
}
