import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { SummaryTable } from '../components/SummaryTable'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="full" maxW="5xl" px="6" direction="column" gap="16">
        <Header />
        <SummaryTable />
      </Flex>
    </Flex>
  )
}
