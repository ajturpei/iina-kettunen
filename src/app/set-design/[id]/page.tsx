import {ResolvingMetadata, Metadata} from 'next'
import {notFound} from 'next/navigation'
import ProjectView from 'src/components/Project/ProjectView'
import {getProjectMetadata} from 'src/components/SEO/projectPageMetadata'
import {getProjectData} from 'src/queries/projectpage'

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

const ProjectPage = async ({params}: ProjectPageProps) => {
  const {id} = params

  const data = await getProjectData(id)
  if (!data || data?.collectionType?.[0] !== 'set') {
    notFound()
  }
  return <ProjectView data={data} />
}

export default ProjectPage
