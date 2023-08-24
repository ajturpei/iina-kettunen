import {IMG} from 'src/components/Header/HeaderStyles'
import {
  ThreeColumns,
  Ingress,
  Paragraph,
  ParagraphHeading,
} from 'src/components/UI/generalLayoutStyles'
import {getContactPage} from 'src/queries/contactpage'
import {Caption} from 'src/components/UI/generalLayoutStyles'

export const metadata = {
  title: 'Contact | Designer Iina Kettunen',
}

const ContactPage = async () => {
  const {topDescription, image} = await getContactPage(false)
  const {url, description, contentfulMetadata} = image || {}
  const {tags} = contentfulMetadata || {}
  return (
    <>
      <h1>{topDescription}</h1>
      <ThreeColumns>
        <div>
          <Ingress small>
            Iina Kettunen is a concept-driven product, furniture and set
            designer based in Helsinki.
          </Ingress>
        </div>
        <div>
          <Paragraph>
            <ParagraphHeading>Contact</ParagraphHeading>
            +358 (0)44 5320314
            <br />
            iina@iinakettunen.com
          </Paragraph>
          <Paragraph>
            <ParagraphHeading>Instagram</ParagraphHeading>
            @iinakettunen
          </Paragraph>
        </div>
        <div>
          <Paragraph>
            <ParagraphHeading>Co-founder, Kettunen rautio</ParagraphHeading>
            <a href="https://kettunenrautio.com">kettunenrautio.com</a>
            <br />
            <a href="https://www.instagram.com/kettunenrautio/">
              @kettunenrautio
            </a>
          </Paragraph>
        </div>
      </ThreeColumns>
      <br />
      <br />
      <br />
      {url && (
        <div>
          <IMG alt={description} src={url} />
          <Caption header={true}>{tags?.[0].name}</Caption>
          <Caption>{description}</Caption>
        </div>
      )}
    </>
  )
}

export default ContactPage
