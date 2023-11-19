import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { maxLogsCount } from '../constants/constants'
import { name } from '../constants/name'
import { initialState } from '../structure'

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    addLog(state, action: PayloadAction<string>) {
      const date = new Date()
      const dateToString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
      state.logs.push({
        date: dateToString,
        text: action.payload,
      })

      // Чтобы не раздуть лог
      if (state.logs.length >= maxLogsCount) {
        state.logs.shift()
      }
    },
    reset: () => initialState,
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
