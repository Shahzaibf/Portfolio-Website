import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router";
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutPage />}  />
        <Route path="/projects" element={<ProjectsPage />}  />
        <Route path="/contacts" element={<ContactsPage />}  />
      </Routes>
    </>
  )
}

export default App
