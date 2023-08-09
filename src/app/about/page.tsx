import Image from 'next/image'
import {
  Divider,
  Ingress,
  Paragraph,
  TwoColumns,
} from 'src/components/UI/generalLayoutStyles'
import profilePic from '../../../public/iina_portrait.jpg'
import {IMG} from 'src/components/Header/HeaderStyles'

export const metadata = {
  title: 'About | Iina Kettunen',
}

const AboutPage = () => {
  return (
    <>
      <Divider />
      <h1>Helsinki based furniture and set designer</h1>
      <TwoColumns>
        <div>
          <Ingress>
            Iina Kettunen is a Helsinki-based product and furniture designer.
            Her passion lies in well-thought aesthetics of everyday life.
          </Ingress>
          <Paragraph>
            Iina Kettunen is a Helsinki-based product and furniture designer.
            Her passion lies in well-thought aesthetics of everyday life. With
            an uncompromising eye for detail and knowledge for quality, Iina's
            designs serve a purpose in a poetic manner.
          </Paragraph>
          <Paragraph>
            Iina Kettunen utilizes her profound knowledge of material and
            proportion also in set design.
          </Paragraph>
        </div>
        <div>
          <IMG alt="Iina Kettunen portrait" src="/iina_portrait.jpg" />
        </div>
      </TwoColumns>
    </>
  )
}

export default AboutPage
