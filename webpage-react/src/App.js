import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Practicalpage } from './pages/Practicalpage';

export default function App() {
  return (
    <div>
      <h1 className={"App"}>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Homepage title="Homeを渡す"/>} />
        <Route path="/about" element={<Aboutpage title="aboutを渡す"/>} />
        <Route path="/practical" element={<Practicalpage title="practicalを渡す"/>} />
      </Routes>
    </div>
  );
}

