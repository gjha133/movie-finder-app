import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.component"
import Home from "./routes/Home.route"
import MovieDetails from "./routes/MovieDetails.route"
import Error from "./routes/Error.route"
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
