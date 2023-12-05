import React from 'react'
import { Flex } from '@components/atoms'
import { clsx } from '@functions/clsx'
import { dti } from '../../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'sample',
}

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(({}) => (
  <Flex data-testid={`${dti}${dtiDictionary.mainDiv}`} className={clsx('')}>
    {}
  </Flex>
))
