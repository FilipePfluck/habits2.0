import {
  Checkbox,
  CheckboxGroup,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import { Check } from 'phosphor-react'

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export const NewHabitModal = ({ ...props }: Omit<ModalProps, 'children'>) => {
  return (
    <Modal {...props} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo hábito</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="label" htmlFor="title" fontWeight="semibold">
            Qual seu comprometimento?
          </Text>
          <Input
            id="title"
            variant="filled"
            mt="3"
            bg="gray.700"
            _focus={{ bg: 'gray.700' }}
            focusBorderColor="purple.600"
            h="12"
            placeholder="Ex: dormir bem"
          />

          <CheckboxGroup colorScheme="green">
            <Stack mt="6" spacing="3">
              {weekDays.map((day, index) => (
                <Checkbox key={index} value={index}>
                  {day}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>

          <Button
            w="full"
            mt="6"
            rounded="lg"
            display="flex"
            gap="3"
            h="12"
            fontWeight="semibold"
            bg="green.600"
            _hover={{ bg: 'green.500' }}
          >
            <Check size={20} weight="bold" />
            Confirmar
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
