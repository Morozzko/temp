import { Flex, Typography } from '@npm.piece/ui-kit'
import React from 'react'
import { LogType } from '@services/logs/lib/types'
import { dti } from '../../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'LogItem',
}

type OwnPropertyType = {} & LogType

export const LogItem: FC<OwnPropertyType> = React.memo(({ date, text }) => (
  <Flex data-testid={`${dti}${dtiDictionary.mainDiv}`} className="gap-1">
    <Typography typography="Body/Body1Short">{date}</Typography>
    <Typography typography="Body/Body1Short">{text}</Typography>
  </Flex>
))
