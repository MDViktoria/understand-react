import { JSX } from '../../@types/react'

export const ReactDOM = {
  render (element: JSX, container: HTMLElement) {
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
