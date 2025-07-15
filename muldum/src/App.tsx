import { Routes, Route } from 'react-router-dom';
import Main from '@_main/Main';
import Notice from '@_pages/Notice/Notice/Notice';
import DetailNotice from '@_notice/Detail/Examine/DetailNotice';
import CreateNotice from '@_notice/Create/CreateNotice';
import NotFound from '@_components/NotFound/NotFound';
import NoticeEdit from '@_pages/Notice/Detail/Edit/NoticeEdit';
import ProjectChoice from '@_pages/Item/Choice/ProjectChoice';
import Approval from '@_pages/Item/Approval/Approval';
import Teamspace from '@_pages/Teamspace/Teamspace';
import ClubHistory from '@_pages/ClubHistory/ClubHistory';
import Onboarding from '@_page/onboarding/index';
import SNotice from '@_page/notice/notice';
import Object from '@_page/object/object';

export default function App() {
  const role = "TEACHER"; 
  console.log()
  // const role = "STUDENT";

  return (
    <Routes>
      <Route path="/" element={role === "TEACHER" ? <Main /> : <Onboarding />} />
      <Route path="/notice" element={role === "TEACHER" ? <Notice /> : <SNotice />} />
      <Route path="/project-approval" element={role === "TEACHER" ? <Approval /> : <Object />} />
      <Route path="/notice/:id" element={<DetailNotice />} />
      <Route path="/create-notice" element={<CreateNotice />} />
      <Route path="/notice/edit/:id" element={<NoticeEdit />} />
      <Route path="/project-choice" element={<ProjectChoice />} />
      <Route path="/object" element={<ProjectChoice />} />
      <Route path="/team-space" element={<Teamspace />} />
      <Route path="/club-history" element={<ClubHistory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
