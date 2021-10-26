import { Link, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} inspired by{' '}
      <Link href="https://github.com/craftzdog" target="_blank">
        Takuya Matsuyama
      </Link>
      .
    </Box>
  )
}

export default Footer
