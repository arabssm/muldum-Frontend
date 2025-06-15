import { useParams, useNavigate } from 'react-router-dom';
import * as _ from './style';
import data from './data';
import type { Notice } from './data';
import NavBar from '../../../components/NavBar/NavBar';

export default function NoticeDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const notice: Notice | undefined = data.find(item => item.idx === Number(id));

    if (!notice) return <div>공지사항을 찾을 수 없습니다.</div>;

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
                        <button>삭제하기</button>
                        <button>수정하기</button>
                    </_.ButtonGroup>
                </_.AdditionRow>

                <_.Image src={notice.image} alt="notice" />
                <_.ImageCaption>{notice.imageCaption}</_.ImageCaption>

                <_.Content>
                    {notice.content.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </_.Content>

                <_.BackButton onClick={() => navigate(-1)}>
                    이전
                </_.BackButton>
            </_.Wrapper>
        </_.Container>
    );
}
