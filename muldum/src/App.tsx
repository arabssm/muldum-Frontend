import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@_pages/Main/Main';
import Notice from '@_notice/Notice/Notice';
import DetailNotice from '@_notice/Detail/Examine/DetailNotice';
import CreateNotice from '@_notice/Create/CreateNotice';
import NotFound from '@_notfound/NotFound';
import NoticeEdit from '@_notice/Detail/Edit/NoticeEdit';
import ProjectChoice from '@_pages/Item/Choice/ProjectChoice';
import Approval from '@_pages/Item/Approval/Approval';
import Teamspace from '@_pages/Teamspace/Teamspace';
import ClubHistory from '@_pages/ClubHistory/ClubHistory';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:id" element={<DetailNotice />} />
        <Route path="/create-notice" element={<CreateNotice />} />
        <Route path="/notice/edit/:id" element={<NoticeEdit />} />
        <Route path="/project-choice" element={<ProjectChoice />} />
        <Route path="/project-approval" element={<Approval />} />
        <Route path="/team-space" element={<Teamspace />} />
        <Route path="/club-history" element={<ClubHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}