import {
  getProjectCollectionCount,
  getProjectCollectionData,
} from 'src/queries/projectCollection'

export const getCategoryProjects = async (
  category: 'set' | 'product',
  preview: boolean
) => {
  return await getProjectCollectionData(category, preview)
}

export const getCategoryProjectsCount = async (
  category: 'set' | 'product',
  preview: boolean
) => {
  return await getProjectCollectionCount(category, preview)
}
