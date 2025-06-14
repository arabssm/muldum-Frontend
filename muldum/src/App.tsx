import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}