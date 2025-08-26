import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';

function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404</h1>; }

export default function App() {
  return (
    <>
      <nav style={{display:'flex', gap:12}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}
