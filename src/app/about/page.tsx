import {
  Caption,
  Ingress,
  TextWrapper,
  TwoColumns,
} from 'src/components/UI/generalLayoutStyles'
import {IMG} from 'src/components/Header/HeaderStyles'
import {getAboutPage} from 'src/queries/aboutpage'
import Markdown from 'react-markdown'

export const metadata = {
  title: 'About | Designer Iina Kettunen',
}

const AboutPage = async () => {
  const {header, ingress, image, text} = (await getAboutPage()) || {}
  const {url, description, contentfulMetadata} = image || {}
  const {tags} = contentfulMetadata || {}
  return (
    <>
      <h1>{header}</h1>
      <TwoColumns>
        <TextWrapper>
          <Ingress>{ingress}</Ingress>
          <Markdown>{text}</Markdown>
        </TextWrapper>

        {url && (
          <div>
            <IMG alt={description} src={url} />
            <Caption $header="true">{tags?.[0]?.name}</Caption>
            <Caption>{description}</Caption>
          </div>
        )}
      </TwoColumns>
    </>
  )
}

export default AboutPage
