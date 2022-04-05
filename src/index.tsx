import { Component } from '../@types/react'
import { React } from './react/react'
import { ReactDOM } from './react/react-dom'

const App: Component = () => (
  <div>
    <header>Header</header>
    <main>
      <h1>Page title</h1>
      <p>lorem...</p>
    </main>
    <footer>Footer</footer>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))
