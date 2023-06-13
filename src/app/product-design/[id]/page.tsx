import {ResolvingMetadata, Metadata} from 'next'
import {Suspense} from 'react'
import {ProjectPageProps} from 'src/app/set-design/[id]/page'
import ProjectView from 'src/components/Project/ProjectView'
import {getProjectMetadata} from 'src/components/SEO/projectPageMetadata'

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  // read route params
  const id = params.id
  return await getProjectMetadata(id)
}

const ProjectPage = async ({params}: ProjectPageProps) => (
  <Suspense>
    <ProjectView params={params} />
  </Suspense>
)

export default ProjectPage
