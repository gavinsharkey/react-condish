import * as React from 'react'

export interface CaseProps {
  if?: any
  default?: boolean
}

class Case extends React.Component<CaseProps> {
  render() {
    return this.props.children ? this.props.children : null
  }
}

export default Case
