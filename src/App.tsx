import { lazy, Suspense } from "solid-js"
import WelcomePage from "./components/welcome-page"

const Editor = lazy(() => import("./components/editor"))

function App() {
  return (
    <Suspense fallback={<WelcomePage />}>
      <Editor />
    </Suspense>
  )
}

export default App
