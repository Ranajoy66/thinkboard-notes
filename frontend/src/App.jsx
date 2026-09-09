import { Route, Routes } from 'react-router-dom'
import Dashboard from "./pages/DashboardPage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
// import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from './components/ProtectedRoutes'
import LandingPage from './pages/LandingPage'
import Features from "./pages/Features";
import About from "./pages/About";
import WhyThinkBoard from "./pages/WhyThinkBoard";

const App = () => {
  return (
    <div data-theme="dracula">

      <Routes>
        {/* Public */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/why-thinkboard"
          element={<WhyThinkBoard />}
        />


        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App
