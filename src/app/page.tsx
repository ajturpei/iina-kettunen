import {getHomePageContent} from 'src/queries/homepage'
import Description from 'src/components/Home/Description'
import DesignSection from 'src/components/Home/ProductDesignSection'
import Image from 'next/image'

const HomePage = async () => {
  const {setDesignShowcase, productDesignShowcase, homepage} =
    await getHomePageContent(false)
  // console.log(productDesignShowcase, setDesignShowcase, homepage)
  const {items} = homepage
  const {header, description, image} = items[0]
  const {url: mainImageUrl, description: imgDescription} = image
  const {total: productTotal} = productDesignShowcase
  const {total: setTotal} = setDesignShowcase
  return (
    <>
      <h1>{header}</h1>
      <Image src={mainImageUrl} alt={imgDescription} />
      <Description description={description} />
      <DesignSection header="Product Design" count={productTotal} />
      <DesignSection header="Set Design" count={setTotal} />
    </>
  )
}

export default HomePage
