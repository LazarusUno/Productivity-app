import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import SigninPage from './pages/SigninPage'
import NoPage from './pages/NoPage'
import DashboardPage from './pages/DashboardPage'
import Social from './pages/Social';
import Streak from './pages/Streak';
import TasksList from './components/TasksList';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SigninPage />} />
        <Route path="login" element={<SigninPage />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<TasksList />} />
          <Route path="social" element={<Social />} />
          <Route path="streak" element={<Streak />} />
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
