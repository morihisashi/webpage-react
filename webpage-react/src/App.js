import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Practicalpage } from './pages/Practicalpage';
import { Notpage } from './pages/Notpage'

export default function App() {
  return (
    <div>
      <h1 className={"App"}>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/practical" element={<Practicalpage />} />
        <Route path="*" element={<Notpage title="ページが見つかりません"/>} />
      </Routes>
    </div>
  );
}

