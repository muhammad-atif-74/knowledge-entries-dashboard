import { routes } from './app-config'
import './index.css'
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import AddNewEntry from './pages/AddNewEntry'
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
            <Route path={routes.ADD_NEW_ENTRY} element={<AddNewEntry />} />
            <Route path={routes.PROFILES} element={<Profile />} />
            <Route path={routes.SETTINGS} element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
