import {
  Link, Navigate, Route, Routes
} from 'react-router-dom'

import IndexPage from './pages'
import NotFoundPages from './pages/not-found'
import ArchivesPage from './pages/archives'
import NotesIdPages from './pages/PageNote/noteID'
import NotesIdEditPages from './pages/PageNote/noteID-edit'
import NotesNewPages from './pages/PageNote/new'
import NavMenu from './components/layout/NavMenu'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">notesku</Link>
        </h1>
        <NavMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<NotesNewPages />} />
          <Route path="/notes/:id" element={<NotesIdPages />} />
          <Route path="/notes/:id/edit" element={<NotesIdEditPages />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
