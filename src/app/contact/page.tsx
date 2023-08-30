import {IMG} from 'src/components/Header/HeaderStyles'
import {
  ThreeColumns,
  Ingress,
  Paragraph,
  ParagraphHeading,
} from 'src/components/UI/generalLayoutStyles'
import {getContactPage} from 'src/queries/contactpage'
import {Caption} from 'src/components/UI/generalLayoutStyles'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | Designer Iina Kettunen',
}

const ContactPage = async () => {
  const {topDescription, image, imageUrl} = (await getContactPage()) || {}
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
          <Paragraph nounderline>
            <ParagraphHeading>Contact</ParagraphHeading>
            <a href="tel:+3580445320314">+358 (0)44 5320314</a>
            <br />
            <a href="mailto:iina@iinakettunen.com">iina@iinakettunen.com</a>
          </Paragraph>
          <Paragraph nounderline>
            <ParagraphHeading>Instagram</ParagraphHeading>
            <a href="https://www.instagram.com/iinakettunen">@iinakettunen</a>
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
          <Link href={imageUrl}>
            <IMG alt={description} src={url} />
            <Caption header={true}>{tags?.[0].name}</Caption>
            <Caption>{description}</Caption>
          </Link>
        </div>
      )}
    </>
  )
}

export default ContactPage
