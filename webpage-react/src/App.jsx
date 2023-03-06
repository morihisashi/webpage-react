import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Listpage } from './pages/Listpage';
import { Aboutpage } from './pages/Aboutpage';
import { Practicalpage } from './pages/Practicalpage';
import { PracticalList } from './pages/Practicallist';
import { Notpage } from './pages/Notpage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="https://morihisashi.github.io/webpage-react" element={<Homepage />} />
        <Route path="https://morihisashi.github.io/webpage-react/list" element={<Listpage />} />
        <Route path="https://morihisashi.github.io/webpage-react/about" element={<Aboutpage />} />
        <Route path="https://morihisashi.github.io/webpage-react/practical" element={<Practicalpage />} />
        <Route path="https://morihisashi.github.io/webpage-react/practicallist" element={<PracticalList/>} />
        <Route path="https://morihisashi.github.io/*" element={<Notpage title="ページが見つかりません"/>} />
      </Routes>
    </div>
  );
}

