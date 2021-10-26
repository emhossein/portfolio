import { Container, Link, List, ListItem, Icon } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'

const Work = () => (
  <Layout title="Dice Game">
    <Container>
      <Title>Dice Game</Title>
      <P>
        This is one of the first games I built with Javascript. in this game I
        mainly emphasize to understand how Javascript works and how it mainly
        functions.
      </P>
      <p>
        Player should roll the dice and avoid risking because if u roll 1 you
        lost all the points. once you reach 100 points you win.
      </p>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mh-dice-game.netlify.app/">
            https://mh-dice-game.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link href="https://github.com/emhossein/dice-game">
            dice-game repository <Icon as={IoLogoGithub} mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/diceGame_01.png" alt="Dice Game" />
      <WorkImage src="/images/works/diceGame_02.png" alt="Dice Game" />
    </Container>
  </Layout>
)

export default Work
