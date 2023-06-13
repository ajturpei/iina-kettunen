import {getProjectData} from 'src/queries/projectpage'

export const getProjectMetadata = async (id: string) => {
  // fetch data
  const project = await getProjectData(id, false)
  const {name, description} = project ?? {}

  return {
    title: `${name} | Iina Kettunen`,
    description,
  }
}
