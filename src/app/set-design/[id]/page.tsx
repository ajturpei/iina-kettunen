import {getProjectData} from 'src/queries/projectpage'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {Metadata, ResolvingMetadata} from 'next'
import ProjectHeader from 'src/components/Project/ProjectHeader'
import ProjectDescription from 'src/components/Project/ProjectDescription'

type PageProps = {
  params: {id: string}
}

export async function generateMetadata(
  {params}: PageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const project = await getProjectData(id, false)
  const {name, description} = project ?? {}
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: `${name} | Iina Kettunen`,
    description,
  }
}

const ProjectPage = async ({params}: PageProps) => {
  const {id} = params

  const project = await getProjectData(id, false)
  console.log(project.description)
  const {name, collectionDetails, projectDescription, collectionType} =
    project ?? {}
  const ProjectDetailsComponent = documentToReactComponents(
    collectionDetails.json
  )
  return (
    <>
      <ProjectHeader detailsComponent={ProjectDetailsComponent} name={name} />
      <ProjectDescription description={projectDescription} />
    </>
  )
}

export default ProjectPage
