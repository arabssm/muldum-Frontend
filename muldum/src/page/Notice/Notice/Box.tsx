import { useNavigate } from 'react-router-dom';
import * as _ from './style';

interface BoxProps {
    idx: number;
    title: string;
    date: string;
}

const formatDate = (iso: string) => {
    const d = new Date(iso);
    const Y = d.getFullYear();
    const M = String(d.getMonth() + 1).padStart(2, '0');
    const D = String(d.getDate()).padStart(2, '0');
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? '오후' : '오전';
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${Y}-${M}-${D} ${ampm} ${h}:${m}`;
};

export default function Box({ idx, title, date }: BoxProps) {
    const navigate = useNavigate();
    return (
        <_.BoxContainer onClick={() => navigate(`/notice/${idx}`)}>
            <_.Left>
                <_.Badge>신규</_.Badge>
                <_.BoxTitle>{title}</_.BoxTitle>
            </_.Left>
        <_.DateText>{formatDate(date)}</_.DateText>
        </_.BoxContainer>
    );
}
