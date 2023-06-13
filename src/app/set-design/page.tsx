import ProjectWithMainImage from 'src/components/Galleries/ProjectWithMainImage'
import {ContentWrapper} from 'src/components/Home/HomeStyles'
import {
  getCategoryProjects,
  getCategoryProjectsCount,
} from 'src/components/Project/projectUtils'
import {SubNavigation} from 'src/components/SubNavigation/SubNavigation'

export const metadata = {
  title: 'Set Design | Iina Kettunen',
}

const SetDesignPage = async () => {
  const {total, items} = (await getCategoryProjects('set', false)) ?? {}
  const projectDataTotal = await getCategoryProjectsCount('product', false)
  return (
    <>
      <SubNavigation setCount={total} productCount={projectDataTotal} />
      <h1>Catalog of Set Design Aesthetics</h1>
      <ContentWrapper>
        <ProjectWithMainImage link="/set-design" items={items} />
      </ContentWrapper>
    </>
  )
}

export default SetDesignPage
