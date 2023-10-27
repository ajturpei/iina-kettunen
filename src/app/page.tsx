import {getHomePageContent} from 'src/queries/homepage'
import Description from 'src/components/Home/Description'
import DesignSection from 'src/components/Home/ProductDesignSection'
import {Caption} from 'src/components/UI/generalLayoutStyles'
import Link from 'next/link'

const HomePage = async () => {
  const {setDesignShowcase, productDesignShowcase, homepage} =
    await getHomePageContent()

  const {items} = homepage || {}
  const {header, description, image, imageUrl} = items?.[0] || {}
  const {
    url: mainImageUrl,
    description: imgDescription,
    contentfulMetadata,
  } = image || {}
  const tag = contentfulMetadata?.tags?.[0]?.name
  const {total: productTotal, items: productItems} = productDesignShowcase || {}
  const {total: setTotal, items: setItems} = setDesignShowcase || {}
  return (
    <>
      <h1>{header}</h1>
      <Link href={imageUrl}>
        <img src={mainImageUrl} alt={imgDescription} />
        {tag ? <Caption $header="true">{tag}</Caption> : null}
        <Caption>{imgDescription}</Caption>
      </Link>
      <Description
        description={description}
        heading="about"
        headingLink="/about"
      />
      <DesignSection
        header="Product design"
        count={productTotal}
        link="/product-design"
        items={productItems}
        frontpage
      />
      <DesignSection
        header="Set design"
        count={setTotal}
        link="/set-design"
        items={setItems}
        frontpage
      />
    </>
  )
}

export default HomePage
