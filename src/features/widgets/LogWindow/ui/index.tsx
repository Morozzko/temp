import { Flex, Typography } from '@npm.piece/ui-kit'
import { ArrayRender, clsx } from '@npm.piece/utils'
import React, { MutableRefObject } from 'react'
import { LogType } from '@services/logs/lib/types'
import { LogItem } from '@widgets/LogWindow/templates/LogItem'
import { dti } from '../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'UI',
}

export type UIPropertyType = {
  logs: LogType[]
  endPageRef: MutableRefObject<Nullable<HTMLDivElement>>
}

export const UI: FC<UIPropertyType> = React.memo(({ logs, endPageRef }) => (
  <Flex
    data-testid={`${dti}${dtiDictionary.mainDiv}`}
    column
    align-items="flex-start">
    <Typography typography="Header/H3">Логи:</Typography>
    <Flex column className={clsx('h-96 w-96 overflow-x-auto', 'border-2 p-2')}>
      <ArrayRender
        items={logs}
        renderItem={log => <LogItem key={log.date} {...log} />}
      />
      <div ref={endPageRef as MutableRefObject<HTMLDivElement>} />
    </Flex>
  </Flex>
))
