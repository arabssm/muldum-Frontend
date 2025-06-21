import * as _ from './style';
import '@_styles';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
const navigate = useNavigate();

return (
    <_.Container>
    <_.MenuArea>
        <_.Text>역대 전공동아리 보러가기</_.Text>
        <_.Shortcut>바로가기 ＞</_.Shortcut>
    </_.MenuArea>

    <_.MenuArea onClick={() => navigate('/notice')}>
        <_.Text>공지사항 보러가기</_.Text>
        <_.Shortcut>바로가기 ＞</_.Shortcut>
    </_.MenuArea>

    <_.MenuArea onClick={() => navigate('/project-choice')}>
        <_.Text>물품 신청 보러가기</_.Text>
        <_.Shortcut>바로가기 ＞</_.Shortcut>
    </_.MenuArea>

    <_.MenuArea>
        <_.Text>월말평가 확인하기</_.Text>
        <_.Shortcut>바로가기 ＞</_.Shortcut>
    </_.MenuArea>
    </_.Container>
);
}
