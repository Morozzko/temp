import React from 'react'
import { Flex } from '@components/atoms'
import { clsx } from '@functions/clsx'
import { dti } from '../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'UI',
}

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> = React.memo(({}) => (
  <Flex data-testid={`${dti}${dtiDictionary.mainDiv}`} className={clsx('')}>
    text
  </Flex>
))
