import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/admin-7f3b2c1d" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 