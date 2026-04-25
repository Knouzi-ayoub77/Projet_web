import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageDateHeure from './pages/PageDateHeure'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date-heure" element={<PageDateHeure />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App