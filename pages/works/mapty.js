import {
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const Work = () => (
  <Layout title="Mapty">
    <Container>
      <Title>Mapty</Title>
      <P>
        An application for tracking how much you run or cycle whit the help of
        leaflet library.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-mapty.netlify.app/">
            https://mh-mapty.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/mapty">
            mapty repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript, Leaflet</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/mapty_01.png" alt="Mapty" />
        <WorkImage src="/images/works/mapty_02.png" alt="Mapty" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
