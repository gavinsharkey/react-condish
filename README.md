# react-condish

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-condish.svg)](https://www.npmjs.com/package/react-condish) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

This is a React component library for declarative conditional rendering, as opposed to the generally imperative weirdness that comes with JSX expressions.

## Install

```bash
npm install --save react-condish
```

## Components

## Switch/Case

These components replicate the functionality of a `switch` block. This is useful when you need to render multiple different things based on a condition. (Switch uses the Strict Equality Operator for comparisons)

Example:
```tsx
import React, { useState, useEffect } from 'react'

import { Switch, Case } from 'react-condish'

class App extends Component {
  const [status, setStatus] = useState('PENDING')

  useEffect(async () => {
    const result = // some asyncronous action

    setStatus(result)
  }, [])

  render() {
    return (
      <Switch on={status}>
        <Case if="PENDING">
          <h1>Loading...</h1>
        </Case>
        <Case if="OK">
          <h1>Loaded!</h1>
        </Case>
        <Case if="ERROR">
          <h1>Error!</h1>
        </Case>
      </Switch>
    )
  }
}
```

You can also set a `default` case, incase no condition is met:

```tsx
  render() {
    return (
      <Switch on={status}>
        <Case if="PENDING">
          <h1>Loading...</h1>
        </Case>
        <Case if="OK">
          <h1>Loaded!</h1>
        </Case>
        <Case if="ERROR">
          <h1>Error!</h1>
        </Case>
        <Case default>
         <h1>Default</h1>
        <Case>
      </Switch>
    )
  }
```

### Props

Switch
| Prop | Type | Required |
| --- | --- | --- |
| on | any | true |

Case
| Prop | Type | Required |
| --- | --- | --- |
| if | any | true* |
| default | boolean | true* |

* Case requires either an if prop OR a default prop, not both

## Roadmap

This is a pretty plain library at the moment, but I intend to expand it as I come up with more ideas.

## License

MIT © [gavinsharkey](https://github.com/gavinsharkey)
