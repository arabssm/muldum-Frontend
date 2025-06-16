import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import '../../App.css';

export default function Notfound() {
    const navigate = useNavigate();
    return(
        <_.Container>
            <_.Error>404</_.Error>
            <_.Title>요청하신 화면을 찾을 수 없습니다</_.Title>
            <_.SubTitle onClick={() => navigate('/')}>홈으로 돌아가기</_.SubTitle>
        </_.Container>
    );
}