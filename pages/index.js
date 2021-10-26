import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { FaTelegram } from 'react-icons/fa'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front-end developer based in Iran!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohammad Masoomian
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        ></Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mohammad is a front-end developer based in Tehran with a passion for
          learning and building digital services/stuff he wants. He looks for
          creative ways to push the boundaries of website front-end code without
          compromising on browser support and performance. He always keeping
          himself updated, He read books and attend conferences & meetups.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Tehran, Iran.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          For the first time he starts coding and build a game with Java.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Found Passion for programming and start his journey by learning C and
          after awhile moved to python and finally found out he loves to design
          websites and interactive pages.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Keep learning and trying to achieve his dream.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Drawing , Playing Video Games, , Coding.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/emhossein" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @emhossein
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/idkwtfimdoing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaTelegram} />}
              >
                @idkwtfimdoing
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/emhosseinm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @emhosseinm
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
