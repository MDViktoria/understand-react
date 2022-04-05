type HTMLTag = keyof HTMLElementTagNameMap

interface Element {
  tag: HTMLTag
  props: PropsWithChildren
}

export type PropsWithChildren<TProps = {}> = TProps & {
  children?: JSX[]
}

export type JSX = Element | string | number

export type Component<TProps={}> = (props: PropsWithChildren<TProps>) => JSX

export type ReactTag = HTMLTag | Component
