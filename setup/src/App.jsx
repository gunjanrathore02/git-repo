import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className="app-root">
      <h1 style={{textAlign: 'center'}}>Welcome</h1>
      <Card title="Welcome Card">
        This card is created to demonstrate the Card component with external CSS styling. You can customize it by passing children or a different title.
      </Card>
    </div>
  )
}

export default App