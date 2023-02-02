import { Flex, Grid } from '@chakra-ui/react'
import { HabitDay } from './Habitday'

const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize

const fillerArray =
  amountOfDaysToFill > 0 ? Array.from({ length: amountOfDaysToFill }) : []

export const SummaryTable = () => {
  return (
    <Flex w="full">
      <Grid templateRows="repeat(7, 1fr)" gap="3">
        {weekdays.map((day, index) => (
          <Flex
            key={index}
            color="gray.400"
            fontSize="xl"
            h="10"
            w="10"
            fontWeight="bold"
            align="center"
            justify="center"
          >
            {day}
          </Flex>
        ))}
      </Grid>
      <Grid templateRows="repeat(7, 1fr)" gap="3" gridAutoFlow="column">
        {fillerArray.map((date, index) => (
          <HabitDay
            key={index}
            date={new Date()}
            amount={5}
            completed={Math.round(Math.random() * 5)}
          />
        ))}
      </Grid>
    </Flex>
  )
}
