import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import NavBar from '@_all/component/sibebar/sidebar';
import EditSuccess from '@_components/Modal/Notice/EditSuccess';
import data from '../Detail/data';
import '@_styles';
import useNoticeState from './useNoticeState';
import { Notice } from './type';

export default function CreateNotice() {
    const navigate = useNavigate();
    const [notice, setNotice] = useNoticeState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('notices');
        if (saved) {
            const savedNotices: Notice[] = JSON.parse(saved);
            data.splice(0, data.length, ...savedNotices);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNotice(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNotice(prev => ({ ...prev, content: value.split('\n') }));
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

        setNotice(prev => ({ ...prev, content: newValue.split('\n') }));

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
                setNotice(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const saved = localStorage.getItem('notices');
        const current: Notice[] = saved ? JSON.parse(saved) : [];

        const updated = [notice, ...current];
        localStorage.setItem('notices', JSON.stringify(updated));
        data.splice(0, data.length, ...updated);

        setShowModal(true);
    };

    return (
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.PageTitle>공지사항 등록</_.PageTitle>
                <_.BoxGroup>
                    <_.TextInput
                        type="text"
                        name="title"
                        value={notice.title}
                        onChange={handleChange}
                        placeholder="공지사항의 제목을 등록하세요"
                    />
                    <_.TextInput
                        type="text"
                        name="formattedDate"
                        value={notice.formattedDate}
                        onChange={handleChange}
                        placeholder="2008.12.09 ~ 2009.12.19"
                    />
                    <_.TextInput
                        type="text"
                        name="author"
                        value={notice.author}
                        onChange={handleChange}
                        placeholder="누구에게 공지할 지 등록하세요"
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
                        placeholder="공지사항 내용을 입력하세요 (100자 이상)"
                    />
                    <_.ChangeImg
                        type="file"
                        accept="image/*"
                        id="image-upload"
                        onChange={handleImageChange}
                    />
                    <_.Picture onClick={() => document.getElementById('image-upload')?.click()}>
                        이미지를 클릭하여 추가해주세요
                    </_.Picture>
                    <_.EnrollButton onClick={handleSubmit}>등록하기</_.EnrollButton>
                </_.BoxGroup>
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