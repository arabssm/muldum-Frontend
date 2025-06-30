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

export default function Approval() {
    const [filter, setFilter] = useState<'가능' | '불가능'>('가능');
    const [selectedClub, setSelectedClub] = useState<string | null>(null);
    const [rejectReason, setRejectReason] = useState<string>('구입처를 잘못 입력한 물품');
    const [selectAll, setSelectAll] = useState(false);
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const navigate = useNavigate();

    const handleFilter = (type: '가능' | '불가능') => {
        setFilter(type);
        setSelectedClub(null);
        setSelectAll(false);
    };

    const handleSelectAll = () => {
        setSelectAll((prev) => !prev);
    };

    const handleApproveClick = () => {
        setShowApproveModal(true);
    };

    const handleRejectClick = () => {
        setShowRejectModal(true);
    };

    const closeApproveModal = () => {
        setShowApproveModal(false);
        navigate('/project-choice');
    };

    const closeRejectModal = () => {
        setShowRejectModal(false);
        navigate('/project-choice');
    };

    return (
        <_.Container>
        <NavBar />
        <_.Title>전공동아리 물품 승인</_.Title>
        <_.Subtitle>학생들이 신청한 물품들을 확인해요</_.Subtitle>

        <Filter filter={filter} setFilter={handleFilter} />

        {filter === '가능' ? (
            <>
            <ClubSelector
                clubs={Clubs}
                selectedClub={selectedClub}
                setSelectedClub={setSelectedClub}
            />
            <_.AddonsArea>
                <_.Addons onClick={handleSelectAll}>
                {selectAll ? '전체해제' : '전체선택'}
                </_.Addons>
                <_.Addons>다운로드</_.Addons>
            </_.AddonsArea>
            {selectedClub ? (
                <ApprovalList selectAll={selectAll} />
            ) : (
                <_.Null>물품승인을 할 동아리를 선택해주세요</_.Null>
            )}
            </>
        ) : (
            <>
            <LongShot rejectReason={rejectReason} setRejectReason={setRejectReason} />
            <_.AddonsArea>
                <_.Addons onClick={handleSelectAll}>
                {selectAll ? '전체해제' : '전체선택'}
                </_.Addons>
                <_.Addons>전체선택</_.Addons>
            </_.AddonsArea>
            <ApprovalList selectAll={selectAll} />
            </>
        )}
        <_.ButtonGroup>
            <_.ApplyButton onClick={handleApproveClick}>승인하기</_.ApplyButton>
            <_.ApplyNobutton onClick={handleRejectClick}>거절하기</_.ApplyNobutton>
        </_.ButtonGroup>

        {showApproveModal && (
            <ApprovalModal
            onClose={closeApproveModal}
            />
        )}

        {showRejectModal && (
            <RejectModal
            onClose={closeRejectModal}
            />
        )}
        </_.Container>
    );
}