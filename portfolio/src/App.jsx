import Navbar from './components/Navbar'
import { Routes, Route } from "react-router";
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/about" element={<AboutPage />}  />
        <Route path="/projects" element={<ProjectsPage />}  />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contacts" element={<ContactsPage />}  />
      </Routes>
    </>
  )
}

export default App
