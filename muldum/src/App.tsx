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
import All from '@_page/object/all';
import Resendpage from '@_page/object/resend';
import PasswordModal from './all/component/modal/password/password';
import { useRecoilValue } from 'recoil';
import { loginModalState, whereismypasswordModalState } from "@_all/atom/Modal";
import LoginModal from './all/component/modal/login/login';
export default function App() {
  //const role = "TEACHER"; 
  const role = "STUDENT";
  const isOpen = useRecoilValue(loginModalState)
  const isOpen2=useRecoilValue(whereismypasswordModalState);  
  return (
    <>
      <Routes>
        <Route path="/" element={role === "STUDENT" ? <Onboarding /> : <Main />} />
        <Route path="/notice" element={role === "STUDENT" ? <SNotice /> : <Notice />} />
        <Route path="/project-approval" element={role === "STUDENT" ? <Object /> : <Approval />} />
        <Route path="/notice/:id" element={<DetailNotice />} />
        <Route path="/create-notice" element={<CreateNotice />} />
        <Route path="/notice/edit/:id" element={<NoticeEdit />} />
        <Route path="/project-choice" element={<ProjectChoice />} />
        <Route path="/object" element={<ProjectChoice />} />
        <Route path="/object/all" element={<All />} />
        <Route path="/object/detail/:id" element={<Resendpage />} />
        <Route path="/team-space" element={<Teamspace />} />
        <Route path="/club-history" element={<ClubHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isOpen && <LoginModal />}
      {isOpen2 && <PasswordModal />}
    </>
  );
}
