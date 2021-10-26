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
      <Title>Comfy Store</Title>
      <Center my={6}>
        <Image src="/images/works/comfy_icon.svg" alt="icon" />
      </Center>
      <P>
        My biggest project (yet small) that took me a week to build. I used an
        API to fetch data to display products and manage them in several
        components and pages with React Router and implement a simple filtering
        system to make it easier to find stuff.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-comfy.netlify.app/">
            https://mh-comfy.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/comfy-store">
            comfy-store repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, React Router, Context API, Styled-component, Rest API, axios
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/comfy_01.png" alt="comfyStore" />
      <WorkImage src="/images/works/comfy_02.png" alt="comfyStore" />
      <WorkImage src="/images/works/comfy_03.png" alt="comfyStore" />
    </Container>
  </Layout>
)

export default Work
