import fetchGraphQL from 'src/lib/fetchGraphQL'
import {draftMode} from 'next/headers'
export const getAboutPage = async (): Promise<any> => {
  const {isEnabled} = draftMode()
  const {data} = await fetchGraphQL(
    `query {
      aboutPage(id: "XCwxSIOXRHQzT7SLyZz2W", preview:${isEnabled}) {
        header
        ingress
        text
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

  return data?.aboutPage
}
