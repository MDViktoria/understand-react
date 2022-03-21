const React = {
  createElement (tag, props, ...children) {
    if (typeof tag === 'function') {
      return tag({ ...props, children })
    }

    return {
      tag,
      props: {
        ...props,
        children
      }
    }
  }
}

const ReactDOM = {
  render (element, container) {
    if (typeof element === 'string' || typeof element === 'number') {
      container.appendChild(document.createTextNode(String(element)))
      return
    }

    const { tag, props } = element
    const domElement = document.createElement(tag)

    if (props.children) {
      props.children.forEach(child => {
        ReactDOM.render(child, domElement)
      })
    }

    for (const prop in props) {
      if (prop !== 'children') {
        const value = props[prop]
        domElement[prop] = value
      }
    }

    container.appendChild(domElement)
  }
}

const App = () => (
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
