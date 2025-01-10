import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {},
})

function Home() {
  return <>root index</>
}
