import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Create from "./pages/Create"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BlogDetails from "./pages/BlogDetails"
import NotFound from "./components/NotFound"
import Edit from "./pages/Edit"


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogs/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
