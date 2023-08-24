import {getHomePageContent} from 'src/queries/homepage'
import Description from 'src/components/Home/Description'
import DesignSection from 'src/components/Home/ProductDesignSection'

const HomePage = async () => {
  const {setDesignShowcase, productDesignShowcase, homepage} =
    await getHomePageContent()

  const {items} = homepage || {}
  const {header, description, image} = items?.[0] || {}
  const {url: mainImageUrl, description: imgDescription} = image || {}
  const {total: productTotal, items: productItems} = productDesignShowcase || {}
  const {total: setTotal, items: setItems} = setDesignShowcase || {}
  return (
    <>
      <h1>{header}</h1>
      <img src={mainImageUrl} alt={imgDescription} />
      <Description description={description} />
      <DesignSection
        header="Product Design"
        count={productTotal}
        link="/product-design"
        items={productItems}
        frontpage
      />
      <DesignSection
        header="Set Design"
        count={setTotal}
        link="/set-design"
        items={setItems}
        frontpage
      />
    </>
  )
}

export default HomePage
