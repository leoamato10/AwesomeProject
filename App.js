import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/components/Home'
import Todos from './src/components/Todos'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Home /> */}
      <Todos />
    </View>
  )
}

export default App