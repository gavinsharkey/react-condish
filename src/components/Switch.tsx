import * as React from 'react'
import { CaseProps } from './Case'

type CaseElement = React.ReactElement<CaseProps>

interface SwitchProps {
  on: any
  children: CaseElement | CaseElement[]
}

class Switch extends React.Component<SwitchProps> {
  render() {
    let hasSwitched = false
    let element: React.ReactNode = null

    React.Children.forEach<CaseElement>(this.props.children, (child) => {
      if (child && !hasSwitched) {
        if (child.props.default) {
          element = child
        }

        if (child.props.if === this.props.on) {
          hasSwitched = true
          element = child
        }
      }
    })

    return element ? React.cloneElement<CaseProps>(element) : null
  }
}

export default Switch