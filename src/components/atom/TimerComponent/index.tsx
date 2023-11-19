import React from 'react'

type OwnPropertyType = {
  id: number
  onClick: Callback<number>
}

export const TimerComponent: FC<OwnPropertyType> = React.memo(
  ({ id, onClick }) => (
    <button
      className="border px-4 py-2"
      onClick={() => onClick(id)}>{`Таймер ${id}`}</button>
  )
)
