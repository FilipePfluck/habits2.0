import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
  amount?: number
  completed?: number
  date: Date
}

export const HabitDay = ({
  amount = 0,
  completed = 0,
  date,
}: HabitDayProps) => {
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0

  let bgColor, borderColor

  if (completedPercentage === 0) {
    bgColor = 'gray.800'
    borderColor = 'gray.700'
  }

  if (completedPercentage > 0 && completedPercentage < 20) {
    bgColor = 'purple.900'
    borderColor = 'purple.600'
  }

  if (completedPercentage >= 20 && completedPercentage < 40) {
    bgColor = 'purple.800'
    borderColor = 'purple.600'
  }

  if (completedPercentage >= 40 && completedPercentage < 60) {
    bgColor = 'purple.700'
    borderColor = 'purple.500'
  }

  if (completedPercentage >= 60 && completedPercentage < 80) {
    bgColor = 'purple.600'
    borderColor = 'purple.500'
  }

  if (completedPercentage >= 80) {
    bgColor = 'purple.500'
    borderColor = 'purple.400'
  }

  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button
          h="10"
          w="10"
          border="2px"
          rounded="lg"
          bg={bgColor}
          borderColor={borderColor}
          variant="unstyled"
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          minW="320px"
          p="6"
          rounded="2xl"
          bg="gray.800"
          border={0}
        >
          <PopoverArrow bg="gray.800" />
          <PopoverBody>
            <Text fontWeight="semibold" color="gray.400">
              quarta-feira
            </Text>
            <Text mt="1" fontWeight="extrabold" fontSize="3xl">
              01/02
            </Text>

            <ProgressBar value={75} mt="4" />

            <CheckboxGroup colorScheme="green">
              <Stack mt="6" spacing="3">
                <Checkbox value="0">Beber água</Checkbox>
                <Checkbox value="1">Fazer exercício</Checkbox>
                <Checkbox value="2">Café da manhã saudável</Checkbox>
              </Stack>
            </CheckboxGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
