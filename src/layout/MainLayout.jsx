import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
    <div className="wrapper">
      <div className="container mx-auto">
        <header className="header">Header</header>
        <div className="main-wrapper">
          <aside className="left-sidebar">Left Sidebar</aside>
          <main className="main-content">
            <Outlet />
          </main>
          <aside className="right-sidebar">Right Sidebar</aside>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainLayout