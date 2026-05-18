import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./Pages/HomePage"
import PostDetailsPage from "./Pages/PostDetailsPage"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App