import { useParams, useNavigate } from 'react-router-dom';
import * as _ from './style';
import NavBar from '../../../../../all/component/sibebar/sidebar';
import Notfound from '@_notfound/NotFound';
import DeleteModal from '@_modal/Delete/DeleteModal';
import ConfirmDeleteModal from '@_modal/Notice/ConfirmDelete';
import makeDocument from '../makeDocument';
import { getNoticeDetail,DeleteNotice,Deletefile } from '../../../../../api/notice/notice';
import { useEffect, useState } from 'react';

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [doc1, setData] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    getNoticeDetail(id)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log('게시물을 불러오는 데 실패했습니다.', err);
      });
  }, [id]);

  if (!doc1) return <Notfound />;
  let date = '';
  if (doc1.createdAt) {
    const d = new Date(doc1.createdAt);
    const Y = d.getFullYear();
    const M = String(d.getMonth() + 1).padStart(2, '0');
    const D = String(d.getDate()).padStart(2, '0');
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? '오후' : '오전';
    if (h > 12) h -= 12;
    if (h === 0) h = 12;
    date = `등록일 ${Y}-${M}-${D}. ${ampm} ${h}:${m}`;
  } else {
    date = '등록일 정보를 불러올 수 없습니다.';
  }


  const handleDelete = () => {
    if (doc1?.files) {
      for (const { fileId } of doc1.files) {
        Deletefile(fileId);
      }
    }
    DeleteNotice(id)
    .then((data) => {
      setData(data);
      console.log(data);
    })
    .catch((err) => {
      console.log('게시물을 삭제하는데 실패했습니다.', err);
    });
    setShowModal(false);
    setShowConfirmModal(true);
  };

  return (
    <_.Container>
      <NavBar />
      <_.Wrapper>
        <_.PageTitle>{doc1.title}</_.PageTitle>
        <_.AdditionRow>
          <_.AdditionLeft>
            <_.Addition>{date}</_.Addition>
            <_.Addition>작성자: 교사 {doc1.teacherName || '알 수 없음'}</_.Addition>
          </_.AdditionLeft>
          <_.ButtonGroup>
            <button onClick={() => setShowModal(true)}>삭제하기</button>
            <button onClick={() => navigate(`/notice/edit/${doc1.id}`)}>수정하기</button>
          </_.ButtonGroup>
        </_.AdditionRow>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {doc1?.files?.map((file, idx) => (
          <_.pic
            key={file.fileId ?? idx}
            src={`${import.meta.env.VITE_API_URL}${file.filePath}`}
            alt={file.fileName}
            style={{ width: 300, borderRadius: 6 }}
          />
        ))}
      </div>
        {doc1.image && <_.Image src={doc1.image} alt="notice" />}
        {doc1.imageCaption && <_.ImageCaption>{doc1.imageCaption}</_.ImageCaption>}
        <_.Content>
            {doc1?.content ? makeDocument(doc1.content) : '내용을 불러올 수 없습니다.'}
        </_.Content>
      </_.Wrapper>
      <_.BackButton onClick={() => navigate(-1)}>이전</_.BackButton>
      {showModal && (
        <DeleteModal
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
      
      {showConfirmModal && (
        <ConfirmDeleteModal
          onClose={() => {
            setShowConfirmModal(false);
            navigate('/notice');
          }}
        />
      )}
    </_.Container>
  );
}