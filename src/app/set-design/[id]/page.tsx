import {ResolvingMetadata, Metadata} from 'next'
import ProjectView from 'src/components/Project/ProjectView'
import {getProjectMetadata} from 'src/components/SEO/projectPageMetadata'

export type ProjectPageProps = {
  params: {id: string}
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  // read route params
  const id = params.id
  return getProjectMetadata(id)
}

const ProjectPage = async ({params}: ProjectPageProps) => (
  <ProjectView params={params} />
)

export default ProjectPage
