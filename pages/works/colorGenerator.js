import { Container, Link, List, ListItem, Icon } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'

const Work = () => (
  <Layout title="Color Generator">
    <Container>
      <Title>Color Generator</Title>

      <P>
        I built this app to make it easier for myself to find the right color
        most of the times.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-color-generator.netlify.app/">
            https://mh-color-generator.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/color-generator">
            color-generator repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Rest API, axios</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/color-generator_01.png"
        alt="color generator"
      />
      <WorkImage
        src="/images/works/color-generator_02.png"
        alt="color generator"
      />
    </Container>
  </Layout>
)

export default Work
