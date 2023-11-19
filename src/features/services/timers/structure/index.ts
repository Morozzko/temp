import { defaultTimersCount } from '../constants/constants'

export const initialState = {
  timersCount: defaultTimersCount,
  timersQueue: [] as number[],
}
