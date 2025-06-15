import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import Notice from './page/Notice/Notice/Notice';
import DetailNotice from './page/Notice/Detail/DetailNotice';
import CreateNotice from './page/Notice/Create/CreateNotice';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<DetailNotice />} />
        <Route path="/create-notice" element={<CreateNotice />} />
      </Routes>
    </BrowserRouter>
  );
}
