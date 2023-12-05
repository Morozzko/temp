import React from 'react'
import { Flex } from '@components/atoms'

type OwnPropertyType = {}

export const Sample: FC<OwnPropertyType> = React.memo(({}) => {
  const sample = 'Sample'

  return <Flex>{sample}</Flex>
})
