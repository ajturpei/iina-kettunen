import fetchGraphQL from 'src/lib/fetchGraphQL'
import {draftMode} from 'next/headers'
export const getContactPage = async (): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query {
      contactPage(id: "iwmzBYioM67cxvGKnGba3", preview:${isEnabled}) {
        topDescription
        imageUrl
        image {
          url
          title
          description
          contentfulMetadata {
            tags {
              name
            }
          }
        }
      }
    }`,
    isEnabled
  )

  return data?.contactPage
}
