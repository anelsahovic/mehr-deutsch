import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NounGenders from './features/nounGenders/pages/NounGenders';
import Topics from './pages/Topics';
import About from './pages/About';
import Help from './pages/Help';
import PracticeNounGenders from './features/nounGenders/pages/PracticeNounGenders';

function App() {
  return (
    <Routes>
      {/* Shared layout components */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="topics">
          <Route index element={<Topics />} />
          <Route path="noun-genders" element={<NounGenders />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>

      {/* Standalone, layout-free route */}
      <Route
        path="/topics/noun-genders/practice"
        element={<PracticeNounGenders />}
      />
    </Routes>
  );
}

export default App;
