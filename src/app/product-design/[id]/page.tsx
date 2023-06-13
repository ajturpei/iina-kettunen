import {ResolvingMetadata, Metadata} from 'next'
import {ProjectPageProps} from 'src/app/set-design/[id]/page'
import ProjectView from 'src/components/Project/ProjectView'
import {getProjectMetadata} from 'src/components/SEO/projectPageMetadata'

export async function generateMetadata(
  {params}: ProjectPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  return getProjectMetadata(id)
}

const ProjectPage = async ({params}: ProjectPageProps) => (
  <ProjectView params={params} />
)

export default ProjectPage
