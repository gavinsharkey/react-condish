import React from 'react'

import { Case, Switch } from 'react-condish'
import 'react-condish/dist/index.css'

const App = () => {
  return (
    <div>
      <Switch on={4}>
        <Case if={4}>
          Hello
        </Case>
      </Switch>
    </div>
  )
}

export default App
