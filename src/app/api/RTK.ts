import { createApi } from '@reduxjs/toolkit/query/react'
import { instance } from '@app/api/axios'
import { createAxiosBaseQuery } from '../../utils/lib/baseQuery'

const baseQuery = createAxiosBaseQuery(instance)

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery,
  reducerPath: 'reducer',
  endpoints: () => ({}),
})
