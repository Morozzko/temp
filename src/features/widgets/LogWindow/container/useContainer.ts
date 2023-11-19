import { useEffect, useRef } from 'react'
import { useAppSelector } from '@hooks/useAppSelector'
import { UIPropertyType } from '../ui'

export const useContainer: CC<UIPropertyType> = () => {
  // Чтение данных из store: Начало
  const { logs } = useAppSelector(state => state.logs)
  // Чтение данных из store: Конец

  // Прокрутка к последнему сообщению в логе: Начало
  const endPageRef = useRef<Nullable<HTMLDivElement>>(null)
  useEffect(() => {
    endPageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs.length])
  // Прокрутка к последнему сообщению в логе: Конец

  return {
    logs,
    endPageRef,
  }
}
