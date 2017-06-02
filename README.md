# react-box-shadow

React component for CSS box-shadow

Demo: https://lachlanjc.me/react-box-shadow

```sh
npm i react-box-shadow
```

```jsx
import React from 'react'
import BoxShadow from 'react-box-shadow'

export default = () => (
  <div>
    <BoxShadow
      inset={false}
      offsetX={0}
      offsetY={0}
      blurRadius={4}
      spreadRadius={0}
      color='rgba(0,0,0,.5)'
    />
    <BoxShadow
      offsetY={8}
      blurRadius={16}
    />
    <BoxShadow
      inset
      blurRadius={16}
    />
    <BoxShadow
      spreadRadius={4}
      blurRadius={16}
      color='#067df7'
    />
  </div>
)
```

MIT License

___
*Another thing by [@lachlanjc](https://twitter.com/lachlanjc).*
