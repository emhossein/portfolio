import { Container, List, ListItem, Link, Icon } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Quiz app">
    <Container>
      <Title>Quiz app</Title>
      <P>
        A simple quiz game build by React and rest API. my first try on working
        with axios library for asynchronous data fetching.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-quiz.netlify.app/">
            https://mh-quiz.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/quiz-app">
            quiz-app repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Rest API, axios</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/quiz-eyecatch.png" alt="quiz app" />
      <WorkImage src="/images/works/quiz_01.png" alt="quiz app" />
    </Container>
  </Layout>
)

export default Work
