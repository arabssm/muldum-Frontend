import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as _ from './style';
import NavBar from '../../../../components/NavBar/NavBar';
import EditSuccess from '../../../../components/Modal/Notice/EditSuccess';
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
    const [showModal, setShowModal] = useState(false);

useEffect(() => {
    if (id) {
        const found = data.find(item => item.idx === Number(id));
        if (found) setNotice({ ...found });
    }
}, [id]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNotice(prev => (prev ? { ...prev, [name]: value } : null));
};

const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNotice(prev => (prev ? { ...prev, content: value.split('\n') } : null));
};

const insertTag = (tag: string) => {
    const openTag = `<${tag}>`;
    const closeTag = `</${tag}>`;

    const textarea = document.getElementById('notice-content') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const newValue =
        value.slice(0, start) + openTag +
        value.slice(start, end) + closeTag +
        value.slice(end);

    setNotice(prev => (prev ? { ...prev, content: newValue.split('\n') } : null));

    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
            start + openTag.length + (end - start),
            start + openTag.length + (end - start)
        );
    }, 0);
};

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setNotice(prev => (prev ? { ...prev, image: reader.result as string } : null));
        };
        reader.readAsDataURL(file);
    }
};

const handleSubmit = () => {
    if (notice) {
        const index = data.findIndex(item => item.idx === notice.idx);
        if (index !== -1) data[index] = notice;
        setShowModal(true);
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
                    <_.TagBox>
                        <_.TagButton onClick={() => insertTag('제목1')}>h1</_.TagButton>
                        <_.TagButton onClick={() => insertTag('제목2')}>h2</_.TagButton>
                        <_.TagButton onClick={() => insertTag('제목3')}>h3</_.TagButton>
                        <_.TagButton onClick={() => insertTag('제목4')}>h4</_.TagButton>
                        <_.TagButton onClick={() => insertTag('강조')}>B</_.TagButton>
                    </_.TagBox>
                    <_.Textarea
                        id="notice-content"
                        value={notice.content.join('\n')}
                        onChange={handleContentChange}
                    />
                    <_.ChangeImg
                        type="file"
                        accept="image/*"
                        id="image-upload"
                        onChange={handleImageChange}
                    />
                    <_.Picture onClick={() => document.getElementById('image-upload')?.click()}>
                        사진을 변경하려면 여기를 클릭하세요
                    </_.Picture>
                    <_.EnrollButton onClick={handleSubmit}>수정하기</_.EnrollButton>
                </_.BoxGroup>
            )}
            </_.Wrapper>
            {showModal && (
                <EditSuccess
                    onClose={() => {
                        setShowModal(false);
                        navigate('/notice');
                    }}
                />
            )}
    </_.Container>
);
}
