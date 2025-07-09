import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import '@_styles';
import NavBar from '@_navbar/NavBar';
import ApprovalList from '@_components/Item/List/ApprovalList';
import Clubs from './ClubList';
import LongShot from './LongShot';
import Filter from './Filter';
import ClubSelector from './ClubSelector';
import RejectModal from '@_modal/Approval/Rejectmodal';
import ApprovalModal from '@_modal/Approval/ApprovalModal';

const Approval = () => {
    const [filter, setFilter] = useState<'가능' | '불가능'>('가능');
    const [selectedClub, setSelectedClub] = useState<string | null>(null);
    const [rejectReason, setRejectReason] = useState<string>('구입처를 잘못 입력한 물품');
    const [selectAll, setSelectAll] = useState(false);
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const navigate = useNavigate();

    const toggleSelectAll = () => setSelectAll((prev) => !prev);
    const closeModal = (isApprove) => {
        if (isApprove) {
            setShowApproveModal(false);
        } else {
            setShowRejectModal(false);
        }
        navigate('/project-choice');
    };

    const renderContent = () => {
        const isPossible = filter === '가능';
        return (
            <>
                {isPossible && (
                    <ClubSelector
                        clubs={Clubs}
                        selectedClub={selectedClub}
                        setSelectedClub={setSelectedClub}
                    />
                )}
                <_.AddonsArea>
                    <_.Addons onClick={toggleSelectAll}>
                        {selectAll ? '전체해제' : '전체선택'}
                    </_.Addons>
                    {isPossible && <_.Addons>다운로드</_.Addons>}
                </_.AddonsArea>
                {isPossible ? (
                    selectedClub ? (
                        <ApprovalList selectAll={selectAll} />
                    ) : (
                        <_.Null>물품승인을 할 동아리를 선택해주세요</_.Null>
                    )
                ) : (
                    <>
                        <LongShot rejectReason={rejectReason} setRejectReason={setRejectReason} />
                        <ApprovalList selectAll={selectAll} />
                    </>
                )}
            </>
        );
    };

    return (
        <_.Container>
            <NavBar />
            <_.Title>전공동아리 물품 승인</_.Title>
            <_.Subtitle>학생들이 신청한 물품들을 확인해요</_.Subtitle>
            <Filter filter={filter} setFilter={setFilter} />
            {renderContent()}
            <_.ButtonGroup>
                <_.ApplyButton onClick={() => setShowApproveModal(true)}>승인하기</_.ApplyButton>
                <_.ApplyNobutton onClick={() => setShowRejectModal(true)}>거절하기</_.ApplyNobutton>
            </_.ButtonGroup>
            {showApproveModal && <ApprovalModal onClose={() => closeModal(true)} />}
            {showRejectModal && <RejectModal onClose={() => closeModal(false)} />}
        </_.Container>
    );
};

export default Approval;