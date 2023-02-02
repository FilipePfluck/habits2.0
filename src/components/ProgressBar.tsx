import { Progress, ProgressProps } from '@chakra-ui/react'

export const ProgressBar = ({ ...rest }: ProgressProps) => {
  return <Progress borderRadius="full" {...rest} />
}
