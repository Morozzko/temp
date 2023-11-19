import { ErrorBoundary, ServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { timers } from '@services/timers'

export const App: FC = () => (
  <>
    <ErrorBoundary errorComponent={<h1>error</h1>}>
      <AppRouter />
    </ErrorBoundary>
    <ServiceInjector services={[timers.service]} />
  </>
)
