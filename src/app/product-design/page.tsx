import ProjectWithMainImage from 'src/components/Galleries/ProjectWithMainImage'
import {ContentWrapper} from 'src/components/Home/HomeStyles'
import {
  getCategoryProjects,
  getCategoryProjectsCount,
} from 'src/components/Project/projectUtils'
import {SubNavigation} from 'src/components/SubNavigation/SubNavigation'

export const metadata = {
  title: 'Product Design | Iina Kettunen',
}

const ProductDesignPage = async () => {
  const {total, items} = (await getCategoryProjects('product', false)) ?? {}
  const setDataTotal = await getCategoryProjectsCount('set', false)

  return (
    <>
      <SubNavigation setCount={setDataTotal} productCount={total} />
      <h1>Catalog of well-thought aesthetics</h1>
      <ContentWrapper>
        <ProjectWithMainImage link="/product-design" items={items} />
      </ContentWrapper>
    </>
  )
}

export default ProductDesignPage
