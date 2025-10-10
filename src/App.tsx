import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import NounGenders from './pages/NounGenders';
import Practice from './pages/Practice';
import About from './pages/About';
import Help from './pages/Help';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="practice">
          <Route index element={<Practice />} />
          <Route path="noun-genders" element={<NounGenders />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default App;
