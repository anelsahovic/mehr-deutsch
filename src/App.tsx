import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import NounGenders from './pages/NounGenders';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="noun-genders" element={<NounGenders />} />
      </Route>
    </Routes>
  );
}

export default App;
