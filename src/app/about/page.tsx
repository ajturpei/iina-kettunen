import {
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
      <h1>Iina with two eyes for worlds yet unseen</h1>
      <TwoColumns>
        <div>
          <Ingress>
            Iina Kettunen is a concept-driven product, furniture and set
            designer based in Helsinki. She creates objects that not only serve
            their purpose and withstand the test of time but also carry
            meaningful stories within. Her passion lies in crafting
            well-thought-out aesthetics for everyday life. Paying attention to
            even the smallest details, she leaves no stone unturned.
          </Ingress>
          <Paragraph>
            Considering herself a bystander, but above all, an by-admirer, Iina
            is always eager to learn about new industries and crafts. Her
            curiosity serves as a driving force for deeper understanding and is
            key to her thorough design process. She firmly believes that the
            secret to lasting design lies in creating pieces that people can
            form emotional attachments to.
          </Paragraph>
          <Paragraph>
            In addition to her expertise in product and furniture design, Iina
            also applies her profound knowledge of materials and proportions to
            set design. She's a co-founder of{' '}
            <a href="https://www.kettunenrautio.com/">KETTUNEN RAUTIO</a>, and
            her work in set design can be explored more vastly at{' '}
            <a href="https://www.kettunenrautio.com/">kettunenrautio.com.</a>
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
