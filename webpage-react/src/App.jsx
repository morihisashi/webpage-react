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
        <Route path="/webpage-react" element={<Homepage />} />
        <Route path="/webpage-react/list" element={<Listpage />} />
        <Route path="/webpage-react/about" element={<Aboutpage />} />
        <Route path="/webpage-react/practical" element={<Practicalpage />} />
        <Route path="/webpage-react/practicallist" element={<PracticalList/>} />
        <Route path="*" element={<Notpage title="ページが見つかりません"/>} />
      </Routes>
    </div>
  );
}

