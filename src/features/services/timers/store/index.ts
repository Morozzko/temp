import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from '../constants/name'
import { initialState } from '../structure'

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    addTimerToQueue(state, action: PayloadAction<number>) {
      state.timersQueue.push(action.payload)
    },

    removeTimerFromQueue(state) {
      state.timersQueue.shift()
    },

    addTimer(state) {
      if (state.timersCount <= 10) {
        state.timersCount = state.timersCount + 1
      }
    },
    reset: () => initialState,
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
