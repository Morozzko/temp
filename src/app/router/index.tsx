import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { Layouts } from '@layouts/index'

const Main = lazy(() =>
  import('pages/Main').then(module => ({
    default: module.Page,
  }))
)

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Layouts.Main />}>
      <Route index element={<Main />} />
    </Route>

    {/* <Route path={RoutesEnum.admin} element={<Layouts.Secondary />}>*/}
    {/*  <Route index element={<div>1</div>} />*/}
    {/*  <Route path={Constants.routes.banned} element={<div>2</div>} />*/}
    {/* </Route>*/}

    <Route path="*" element={<NotFound />} />
  </Routes>
)
