import { Flex } from '@npm.piece/ui-kit'
import { ArrayRender, clsx } from '@npm.piece/utils'
import { TimerComponent } from 'components/atom/TimerComponent'
import React from 'react'
import { dti } from '../constants/data-testid'

export const dtiDictionary = {
  mainDiv: 'UI',
  resetButton: 'resetButton',
  addTimer: 'addTimer',
}

export type UIPropertyType = {
  timersCount: number
  onTimerClick: Callback<number>
  onResetClick: Callback
  onAddTimerClick: Callback
}

export const UI: FC<UIPropertyType> = React.memo(
  ({ timersCount, onTimerClick, onResetClick, onAddTimerClick }) => (
    <Flex
      data-testid={`${dti}${dtiDictionary.mainDiv}`}
      column
      className={clsx('overflow-y-auto')}>
      <Flex className={clsx('gap-4 ')}>
        <ArrayRender
          items={new Array(timersCount).fill(null).map((_, index) => index + 1)}
          renderItem={id => (
            <TimerComponent key={id} id={id} onClick={onTimerClick} />
          )}
        />
      </Flex>

      <Flex className={clsx('gap-4')}>
        <button
          className="text-indication-danger"
          data-testid={`${dti}${dtiDictionary.addTimer}`}
          onClick={onAddTimerClick}>
          Добавить таймер
        </button>

        <button
          data-testid={`${dti}${dtiDictionary.resetButton}`}
          onClick={onResetClick}>
          Сброс
        </button>
      </Flex>
    </Flex>
  )
)
