import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.component"
import Home from "./pages/Home.page"
import MovieDetails from "./pages/MovieDetails.page"
import Error from "./pages/Error.page"
import { AppProvider } from "./context/context"

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
