import {
  Container,
  Link,
  List,
  ListItem,
  Center,
  Image,
  Icon
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'

const Work = () => (
  <Layout title="Comfy Store">
    <Container>
      <Title>Whatsapp Clone</Title>
      <Center my={6}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png"
          alt="icon"
        />
      </Center>
      <P>
        A simple whatsapp clone using Next.js and Firebase to provide an
        One-on-One chat system.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://piyoschat.vercel.app/">
            https://piyoschat.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/whatsapp-2.0">
            whatsapp-2.0 repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Styled-component, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/whatsapp_01" alt="whatsappClone" />
      <WorkImage src="/images/works/whatsapp_02" alt="whatsappClone" />
    </Container>
  </Layout>
)

export default Work
