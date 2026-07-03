import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NounGenders from './features/nounGenders/pages/NounGenders';
import Topics from './pages/Topics';
import About from './pages/About';
import Help from './pages/Help';
import PracticeNounGenders from './features/nounGenders/pages/PracticeNounGenders';
import VerbsWithPrepositions from './features/verbsWithPrepositions/pages/VerbsWithPrepositions';
import PracticeVerbsWithPrepositions from './features/verbsWithPrepositions/pages/PracticeVerbsWithPrepositions';
import LobbyVerbsWithPrepositions from './features/verbsWithPrepositions/pages/LobbyVerbsWithPrepositions';

function App() {
  return (
    <Routes>
      {/* Shared layout components */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="topics">
          <Route index element={<Topics />} />
          <Route path="noun-genders" element={<NounGenders />} />
          <Route
            path="verbs-with-prepositions"
            element={<VerbsWithPrepositions />}
          />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>

      {/* Standalone, layout-free route */}
      {/*Noun Genders*/}
      <Route
        path="/topics/noun-genders/practice"
        element={<PracticeNounGenders />}
      />
      {/* Verbs with prepositions */}
      <Route
        path="/topics/verbs-with-prepositions/lobby"
        element={<LobbyVerbsWithPrepositions />}
      />
      <Route
        path="/topics/verbs-with-prepositions/practice"
        element={<PracticeVerbsWithPrepositions />}
      />
    </Routes>
  );
}

export default App;
