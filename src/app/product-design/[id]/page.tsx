import {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {ProjectPageProps} from 'src/app/set-design/[id]/page'
import ProjectView from 'src/components/Project/ProjectView'
import {getProjectMetadata} from 'src/components/SEO/projectPageMetadata'
import {getProjectData} from 'src/queries/projectpage'

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  // read route params
  const id = params.id
  return await getProjectMetadata(id)
}

const ProjectPage = async ({params}: ProjectPageProps) => {
  const {id} = params
  const data = await getProjectData(id)
  if (!data || data?.collectionType?.[0] !== 'product') {
    notFound()
  }
  return <ProjectView data={data} />
}

export default ProjectPage
