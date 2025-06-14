import { icons } from '../NavBar/icon';
import * as _ from './style';
import '../../App.css';

export default function NavBar(){
    return (
        <_.Container>
            <_.MainArea>
                <_.LoginTag>
                    <_.Icon src={icons.login} alt="login" />
                    <_.Text>로그인</_.Text>
                </_.LoginTag>
                <_.TagArea>
                    <_.Icon src={icons.home} alt="home" />
                    <_.Text>홈 화면</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.club} alt="club" />
                    <_.Text>역대 동아리</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.date} alt="date" />
                    <_.Text>공유 캘린더</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.item} alt="item" />
                    <_.Text>물품관리</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.alarm} alt="alarm" />
                    <_.Text>월말평가</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.notice} alt="notice" />
                    <_.Text>공지사항</_.Text>
                </_.TagArea>
                <_.TagArea>
                    <_.Icon src={icons.teamspace} alt="teamspace" />
                    <_.Text>팀스페이스</_.Text>
                </_.TagArea>
                <_.SettingTag>
                    <_.Icon src={icons.setting} alt="setting" />
                    <_.Text>설정</_.Text>
                </_.SettingTag>
            </_.MainArea>
        </_.Container>
    )
}