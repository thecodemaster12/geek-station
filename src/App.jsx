import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./Pages/HomePage"
import PostDetailsPage from "./Pages/PostDetailsPage"
import AuthLayout from "./layout/AuthLayout"
import LoginPage from "./Pages/Auth/LoginPage"
import RegisterPage from "./Pages/Auth/RegisterPage"
import CreatePostPage from "./Pages/CreatePostPage"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/create-post" element={<CreatePostPage />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App