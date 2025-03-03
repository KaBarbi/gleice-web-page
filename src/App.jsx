import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commands" element={<List />} />
        </Routes>
    )
}

export default App
