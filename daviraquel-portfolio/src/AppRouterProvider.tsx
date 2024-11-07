import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home"

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Home />,
    },
  ])

  return <RouterProvider router={router} />
}
