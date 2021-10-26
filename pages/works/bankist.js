import { Icon, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const Work = () => (
  <Layout title="Bankist">
    <Container>
      <Title>Bankist</Title>
      <P>
        A single page to get familiar more with advanced DOM manipulation
        concepts both in theory and action.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-bankist.netlify.app/">
            https://mh-bankist.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/bankist">
            bankist repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript, Leaflet</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bankist_01.png" alt="bankist" />
      <WorkImage src="/images/works/bankist_02.png" alt="bankist" />
      <WorkImage alt="bankist" src="/images/works/bankist_03.png" />
    </Container>
  </Layout>
)

export default Work
