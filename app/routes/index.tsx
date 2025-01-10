import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: RouteComponent,
  // loader: async (opts) => {}
})

function RouteComponent() {
  return <>root index</>
}
