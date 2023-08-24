import {
  getProjectCollectionCount,
  getProjectCollectionData,
} from 'src/queries/projectCollection'

export const getCategoryProjects = async (category: 'set' | 'product') => {
  return await getProjectCollectionData(category)
}

export const getCategoryProjectsCount = async (category: 'set' | 'product') => {
  return await getProjectCollectionCount(category)
}
