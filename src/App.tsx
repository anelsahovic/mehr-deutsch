import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import NounGenders from './pages/NounGenders';
import Practice from './pages/Practice';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="practice">
          <Route index element={<Practice />} />
          <Route path="noun-genders" element={<NounGenders />} />
        </Route>

        <Route path="about" element={<div>about</div>} />
        <Route path="help" element={<div>help</div>} />
      </Route>
    </Routes>
  );
}

export default App;
