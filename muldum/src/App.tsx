import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@_main/Main';
import Notice from '@_notice/Notice/Notice';
import DetailNotice from '@_notice/Detail/Examine/DetailNotice';
import CreateNotice from '@_notice/Create/CreateNotice';
import NotFound from '@_components/';
import NoticeEdit from 'src/admin/page/Notice/Detail/Edit/NoticeEdit';
import ProjectChoice from 'src/admin/page/Item/Choice/ProjectChoice';
import Approval from 'src/admin/page/Item/Approval/Approval';
import Teamspace from 'src/admin/page/Teamspace/Teamspace';
import ClubHistory from 'src/admin/page/ClubHistory/ClubHistory';

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