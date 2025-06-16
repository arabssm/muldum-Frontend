import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import Notice from './page/Notice/Notice/Notice';
import DetailNotice from './page/Notice/Detail/DetailNotice';
import NotFound from './components/NotFound/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<DetailNotice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
