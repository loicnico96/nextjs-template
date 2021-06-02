import React, { ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <div className="container">{children}</div>
}
