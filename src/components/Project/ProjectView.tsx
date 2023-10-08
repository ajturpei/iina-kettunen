import {getProjectData} from 'src/queries/projectpage'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import ProjectHeader from 'src/components/Project/ProjectHeader'
import ProjectDescription from 'src/components/Project/ProjectDescription'
import ProjectDetails from './ProjectDetails'
import ProjectImageGalleries from './ProjectImageGalleries'

const ProjectView = async ({data}: any) => {
  const {
    name,
    year,
    collectionDetails,
    projectDescription,
    longDescription,
    collectionType,
    galleryReferenceCollection,
    inProduction,
  } = data || {}

  const ProjectDetailsComponent = collectionDetails
    ? documentToReactComponents(collectionDetails.json)
    : null

  const isInProduction = inProduction?.includes('true')

  return (
    <>
      <ProjectDetails
        collectionType={collectionType}
        year={year}
        isInProduction={isInProduction}
      />
      <ProjectHeader detailsComponent={ProjectDetailsComponent} name={name} />
      <ProjectDescription description={projectDescription} />
      <ProjectDescription description={longDescription} />
      <ProjectImageGalleries
        galleryReferenceCollection={galleryReferenceCollection}
      />
    </>
  )
}

export default ProjectView
