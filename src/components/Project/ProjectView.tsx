import {getProjectData} from 'src/queries/projectpage'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import ProjectHeader from 'src/components/Project/ProjectHeader'
import ProjectDescription from 'src/components/Project/ProjectDescription'
import {ProjectPageProps} from 'src/app/set-design/[id]/page'
import ProjectDetails from './ProjectDetails'
import ProjectImageGalleries from './ProjectImageGalleries'

const ProjectView = async ({params}: ProjectPageProps) => {
  const {id} = params

  const {
    name,
    year,
    collectionDetails,
    projectDescription,
    collectionType,
    galleryReferenceCollection,
  } = (await getProjectData(id, false)) || {}

  const ProjectDetailsComponent = documentToReactComponents(
    collectionDetails.json
  )

  return (
    <>
      <ProjectDetails collectionType={collectionType} year={year} />
      <ProjectHeader detailsComponent={ProjectDetailsComponent} name={name} />
      <ProjectDescription description={projectDescription} />
      <ProjectImageGalleries
        galleryReferenceCollection={galleryReferenceCollection}
      />
    </>
  )
}

export default ProjectView
