import fetchGraphQL from 'src/lib/fetchGraphQL'

export const getContactPage = async (preview: boolean): Promise<any> => {
  const {data} = await fetchGraphQL(
    `query {
      contactPage(id: "iwmzBYioM67cxvGKnGba3") {
        topDescription
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
    preview
  )

  return data.contactPage
}
