import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import SinglePageWithErrorBoundary from './pages/components/SinglePageWithErrorBoundary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/:id" element={<SinglePageWithErrorBoundary />} />
    </Routes>
  );
}

export default App;
