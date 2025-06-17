import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import Notice from './page/Notice/Notice/Notice';
import DetailNotice from './page/Notice/Detail/DetailNotice';
import CreateNotice from './page/Notice/Create/CreateNotice';
import NotFound from './components/NotFound/NotFound';
import NoticeEdit from './page/Notice/Detail/NoticeEdit';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<DetailNotice />} />
        <Route path="/create-notice" element={<CreateNotice />} />
        <Route path="/notice/edit/:id" element={<NoticeEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
