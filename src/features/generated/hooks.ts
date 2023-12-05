import {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
  usePlaceOrderMutation,
} from './hooks/order'

// Этот реэкспорт хуков нужен, если вдруг поменяются названия файлов при изменении контракта с backend
export { useDeleteOrderMutation, useGetOrderByIdQuery, usePlaceOrderMutation }
