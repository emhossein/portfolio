import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'

import thumbMapty from '../public/images/works/mapty-eyecatch.png'
import thumbDiceGame from '../public/images/works/diceGame-eyecatch.png'
import thumbBankist from '../public/images/works/bankist-eyecatch.png'
import thumbQuiz from '../public/images/works/quiz-eyecatch.png'
import thumbColor from '../public/images/works/color-generator-eyecatch.png'
import thumbComfy from '../public/images/works/comfy-eyecatch.png'
import whatsappClone from '../public/images/works/whatsapp_02.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Section>
        <Heading as="h3" variant="section-title">
          Things I&apos;ve built
        </Heading>
        <Paragraph>
          I have zero experience in web development so I had to improvise and
          find a solution. so I searched all around the web and watching over
          200 hours of different courses, I made some small projects to just
          show I know things.
        </Paragraph>
      </Section>
      <Heading as="h3" fontSize={20} mb={4}>
        Javascript
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="mapty" title="Mapty" thumbnail={thumbMapty}>
            A simple application for tracking your workout.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="diceGame"
            title="Dice Game"
            thumbnail={thumbDiceGame}
          >
            For when you are bored in office!
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="bankist" title="Bankist" thumbnail={thumbBankist}>
            A single page to get familiar more with DOM manipulation.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          React
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="quizApp" thumbnail={thumbQuiz} title="Quiz app">
            An easy quiz game to test your knowledge.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="colorGenerator"
            thumbnail={thumbColor}
            title="Color Generator"
          >
            Made this app to make it easier to find the right color.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="comfyStore"
            thumbnail={thumbComfy}
            title="Comfy Sloth"
          >
            A Single-Page-Application to use all I know just from React.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="whatsappClone"
            thumbnail={whatsappClone}
            title="Whatsapp Clone"
          >
            Simple Whatsapp Clone.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
