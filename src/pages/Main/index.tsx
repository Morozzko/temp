import { Flex } from '@npm.piece/ui-kit'
import { Helmet } from 'react-helmet'
import { LogWindow } from '@widgets/LogWindow'
import { TimerList } from '@widgets/TimerList'

export const Page: FC = () => (
  <>
    <Helmet title="Test Task" />

    <Flex column className="mt-6 gap-4" middle>
      <TimerList.Widget />
      <LogWindow.Widget />
    </Flex>
  </>
)
