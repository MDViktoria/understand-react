import { JSX, PropsWithChildren, ReactTag } from '../../@types/react'

export const React = {
  createElement (tag: ReactTag, props: PropsWithChildren, ...children: JSX[]): JSX {
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