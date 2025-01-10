import { createLink, LinkComponent } from '@tanstack/react-router'
import * as React from 'react'
import { cn } from '~/lib/cn'

type BasicLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

type LinkProps = BasicLinkProps & {
  ref?: React.RefObject<HTMLAnchorElement | null>
}

const BasicLinkComponent = ({ ref, ...props }: LinkProps) => {
  return <a ref={ref} {...props} />
}

const CreatedLinkComponent = createLink(BasicLinkComponent)

export function createCustomLink(defaultProps: LinkProps) {
  const CustomLink: LinkComponent<typeof BasicLinkComponent> = (innerProps) => {
    const className = cn(defaultProps.className, innerProps.className)
    return (
      <CreatedLinkComponent
        {...{ ...innerProps, ...defaultProps }}
        className={className}
      />
    )
  }

  return CustomLink
}
