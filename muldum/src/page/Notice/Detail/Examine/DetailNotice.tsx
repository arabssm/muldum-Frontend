import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as _ from './style';
import data from '../data';
import type { Notice } from '../data';
import NavBar from '../../../../components/NavBar/NavBar';
import Notfound from '../../../../components/NotFound/NotFound';
import DeleteModal from '../../../../components/Modal/Delete/DeleteModal';
import ConfirmDeleteModal from '../../../../components/Modal/Notice/ConfirmDelete';
import makeDocument from '../makeDocument';

export default function NoticeDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const notice: Notice | undefined = data.find(item => item.idx === Number(id));

if (!notice) return <Notfound />;

const handleDelete = () => {
    setShowModal(false);
    setShowConfirmModal(true);

    setTimeout(() => {
        setShowConfirmModal(false);
        navigate('/notice');
    }, 5000);
};

return (
    <_.Container>
        <NavBar />
        <_.Wrapper>
            <_.PageTitle>{notice.title}</_.PageTitle>
            <_.AdditionRow>
                <_.AdditionLeft>
                    <_.Addition>등록일: {notice.formattedDate}</_.Addition>
                    <_.Addition>작성자: {notice.author}</_.Addition>
                </_.AdditionLeft>
                <_.ButtonGroup>
                    <button onClick={() => setShowModal(true)}>삭제하기</button>
                    <button onClick={() => navigate(`/notice/edit/${notice.idx}`)}>수정하기</button>
                </_.ButtonGroup>
            </_.AdditionRow>
            <_.Image src={notice.image} alt="notice" />
            <_.ImageCaption>{notice.imageCaption}</_.ImageCaption>
            <_.Content>
                {makeDocument(notice.content.join('\n'))}
            </_.Content>
            <_.BackButton onClick={() => navigate(-1)}>이전</_.BackButton>
        </_.Wrapper>

        {showModal && (
            <DeleteModal
                onCancel={() => setShowModal(false)}
                onConfirm={handleDelete}
            />
        )}

        {showConfirmModal && (
            <ConfirmDeleteModal onClose={() => {
                setShowConfirmModal(false);
                navigate('/notice');
            }} />
        )}
    </_.Container>
);
}
