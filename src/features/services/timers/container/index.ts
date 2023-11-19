import { useEffect, useRef } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'

export const useContainer: SC = () => {
  // Чтение данных из store: Начало
  const { timersQueue } = useAppSelector(state => state.timers)
  // Чтение данных из store: Конец

  // Работа с данными из store: Начало
  const {
    timers: { removeTimerFromQueue },
    logs: { addLog },
  } = useAppActions()
  // Работа с данными из store: Конец

  // Хранилище для таймера: Начало
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  // Хранилище для таймера: Конец

  // Запуск и обработка таймера: Начало
  useEffect(() => {
    if (timersQueue.length && !timerRef.current) {
      // Первый элемент в очереди
      const firstElement = timersQueue[0]
      // Преобразование в миллисекунды
      const delay = firstElement * 1000

      addLog(`Инициализация таймера ${firstElement}`)
      timerRef.current = setTimeout(() => {
        addLog(`Срабатывание таймера ${firstElement}`)

        // Удаление таймера из очереди
        removeTimerFromQueue()

        // Очистка ссылки на таймер
        timerRef.current = null
      }, delay)
    }

    if (!timersQueue.length && timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
      addLog('Сброс приложения')
    }
  }, [timersQueue.length])
  // Запуск и обработка таймера: Конец

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    },
    []
  )
}
