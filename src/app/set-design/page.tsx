// import ProjectWithMainImage from 'src/components/Galleries/ProjectWithMainImage'
// import {ContentWrapper} from 'src/components/Home/HomeStyles'
import {
  getCategoryProjects,
  getCategoryProjectsCount,
} from 'src/components/Project/projectUtils'
import {SubNavigation} from 'src/components/SubNavigation/SubNavigation'
import SetDesignView from 'src/components/Galleries/SetDesignView'

export const metadata = {
  title: 'Set design | Designer Iina Kettunen',
}

const SetDesignPage = async () => {
  const {total, items} = (await getCategoryProjects('set')) ?? {}
  const projectDataTotal = await getCategoryProjectsCount('product')
  // const firstItems = items.filter((_i: any, index: number) => index < 3)
  // const leftItems = items.filter((_i: any, index: number) => index > 2)
  return (
    <>
      <SubNavigation setCount={total} productCount={projectDataTotal} />
      <h1>Stories in the language of sight</h1>
      <div>
        <SetDesignView items={items} />
      </div>
      {/* <ContentWrapper>
        <ProjectWithMainImage link="/set-design" items={leftItems} />
      </ContentWrapper> */}
    </>
  )
}

export default SetDesignPage
