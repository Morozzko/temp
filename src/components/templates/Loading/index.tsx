import React from 'react'
import { Flex } from '@components/atoms'

type OwnPropertyType = {}

export const Loading: FC<OwnPropertyType> = React.memo(() => {
  const loading = 'Loading'

  return <Flex>{loading}</Flex>
})
