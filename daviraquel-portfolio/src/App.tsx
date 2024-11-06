import { Home } from "./pages/Home"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} component={Home} />{" "}
    </BrowserRouter>
  )
}

export default App
