import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Define a Home como página inicial */}
            <Route path="/commands" element={<List />} />{" "}
            {/* Define /commands para carregar List */}
        </Routes>
    )
}

export default App
