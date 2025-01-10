import { createLink, LinkComponent, linkOptions } from '@tanstack/react-router'
import React from 'react'

export function createCustomLink(options: Parameters<typeof linkOptions>[0]) {
  function Inner(props: any) {
    const Component = createLink(CustomLinkBase)
    return <Component {...props} {...linkOptions(options)} />
  }
  Inner.displayName = 'CustomLink'
  return Inner as LinkComponent<typeof CustomLinkBase>
}

const CustomLinkBase = React.forwardRef<HTMLAnchorElement>((props, ref) => (
  <a ref={ref} {...props} />
))
CustomLinkBase.displayName = 'CustomLinkBase'
