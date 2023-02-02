import {
  Button,
  Flex,
  Image,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Plus } from 'phosphor-react'
import { NewHabitModal } from './NewHabitModal'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        w="full"
        maxW="3xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Image src="/logo.svg" alt="" />
        <Button
          variant="unstyled"
          boxSizing="border-box"
          border="1px"
          borderColor="purple.500"
          fontWeight="semibold"
          borderRadius="md"
          px="6"
          py="4"
          h="60px"
          display="flex"
          gap="3"
          _hover={{ borderColor: 'purple.300' }}
          onClick={onOpen}
        >
          <Icon as={Plus} h="20px" w="20px" color="purple.500" />
          <Text>Novo hábito</Text>
        </Button>
      </Flex>
      <NewHabitModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
