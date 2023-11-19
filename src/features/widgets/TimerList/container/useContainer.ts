import { useCallback } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'
import { UIPropertyType } from '../ui'

export const useContainer: CC<UIPropertyType> = () => {
  // Чтение данных из store: Начало
  const { timersCount } = useAppSelector(state => state.timers)
  // Чтение данных из store: Конец

  // Работа с данными из store: Начало
  const {
    timers: { addTimerToQueue, addTimer, reset: resetTimer },
    logs: { addLog, reset: resetLog },
  } = useAppActions()
  // Работа с данными из store: Конец

  // Функция добавления таймера в очередь: Начало
  const onTimerClick = useCallback((id: number) => {
    addTimerToQueue(id)
    addLog(`Таймер ${id} добавлен в очередь`)
  }, [])
  // Функция добавления таймера в очередь: Конец

  // Функция сброса приложения: Начало
  const onResetClick = useCallback(() => {
    resetTimer()
    resetLog()
  }, [])
  // Функция сброса приложения: Конец

  // Функция добавления таймера в приложение: Начало
  const onAddTimerClick = useCallback(() => {
    addTimer()
  }, [])
  // Функция добавления таймера в приложение: Конец

  return {
    timersCount,
    onTimerClick,
    onResetClick,
    onAddTimerClick,
  }
}
