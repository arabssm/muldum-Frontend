import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as _ from './style';
import NavBar from '../../../../components/NavBar/NavBar';
import data from '../data'; 
export interface Notice {
    idx: number;
    title: string;
    date: string;
    formattedDate: string;
    image: string;
    imageCaption: string;
    content: string[];
    author: string;
}

export default function NoticeEdit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [notice, setNotice] = useState<Notice | null>(null);

    useEffect(() => {
        if (id) {
        const found = data.find(item => item.idx === Number(id));
        if (found) setNotice({ ...found });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNotice((prev: Notice | null) =>
        prev ? { ...prev, [name]: value } : null
        );
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNotice((prev: Notice | null) =>
        prev ? { ...prev, content: value.split('\n') } : null
        );
    };

    const handleSubmit = () => {
        if (notice) {
            const index = data.findIndex(item => item.idx === notice.idx);
            if (index !== -1) data[index] = notice;

            navigate('/notice'); 
            }
        };

    return (
        <_.Container>
        <NavBar />
        <_.Wrapper>
            <_.PageTitle>공지사항 수정</_.PageTitle>
            {notice && (
            <_.BoxGroup>
                <_.TextInput
                    type="text"
                    name="title"
                    value={notice.title}
                    onChange={handleChange}
                />
                <_.TextInput
                    type="text"
                    name="formattedDate"
                    value={notice.formattedDate}
                    onChange={handleChange}
                />
                <_.TagBox> h1 h2 h3 h4 B </_.TagBox>
                <_.Textarea
                    value={notice.content.join('\n')}
                    onChange={handleContentChange}
                />
                <_.Picture>사진을 변경할려면 사진을 클릭하여 변경하세요</_.Picture>
                <_.EnrollButton onClick={handleSubmit}>수정</_.EnrollButton>
            </_.BoxGroup>
            )}
        </_.Wrapper>
        </_.Container>
);}