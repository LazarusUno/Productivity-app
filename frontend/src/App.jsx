import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import SigninPage from './pages/SigninPage'
import NoPage from './pages/NoPage'
import DashboardPage from './pages/DashboardPage'
import Social from './pages/Social';
import Streak from './pages/Streak';
import TasksList from './components/TasksList';
import SignupPage from './pages/SignupPage';
import ProjectsList from './components/ProjectsList';
import AdminDashboard from './pages/AdminPage';
import CalendarComponent from './pages/Calendar';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<SigninPage />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<ProjectsList />} />
          <Route path="social" element={<Social />} />
          <Route path="streak" element={<Streak />} />
          <Route path="projects/:projectId/tasks" element={<TasksList />} />
          <Route path="timebox" element={<CalendarComponent />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
