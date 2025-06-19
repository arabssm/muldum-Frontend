import * as _ from './style';
import '../../App.css';
import specialty from '../../assets/item/specialty.svg';
import autonomy from '../../assets/item/autonomy.svg';
import net from '../../assets/item/net.svg';
import congrats from '../../assets/item/congrats.svg';

export default function Menu() {

return (
    <_.Container>
    <_.MenuArea>
        <_.UpGroup>
            <_.Icon src= {specialty} alt='specialty'/>
            <_.Dday>D-30</_.Dday>
        </_.UpGroup>
        <_.DownGroup>
            <_.Projectname>전공동아리 물품확인</_.Projectname>
            <_.LastGroup>
                <_.ProjectSub>최근 신청한 동아리는 팀 아라에요</_.ProjectSub>
                <_.Deadline>마감 시간 설정</_.Deadline>
            </_.LastGroup>
        </_.DownGroup>
    </_.MenuArea>
            <_.MenuArea>
        <_.UpGroup>
            <_.Icon src= {congrats} alt='congrats'/>
            <_.Dday>D-30</_.Dday>
        </_.UpGroup>
        <_.DownGroup>
            <_.Projectname>졸업작품 물품확인</_.Projectname>
            <_.LastGroup>
                <_.ProjectSub>최근 신청한 동아리는 팀 아라에요</_.ProjectSub>
                <_.Deadline>마감 시간 설정</_.Deadline>
            </_.LastGroup>
        </_.DownGroup>
    </_.MenuArea>
            <_.MenuArea>
        <_.UpGroup>
            <_.Icon src= {autonomy} alt='autonomy'/>
            <_.Dday>D-30</_.Dday>
        </_.UpGroup>
        <_.DownGroup>
            <_.Projectname>자율동아리 물품확인</_.Projectname>
            <_.LastGroup>
                <_.ProjectSub>최근 신청한 동아리는 팀 아라에요</_.ProjectSub>
                <_.Deadline>마감 시간 설정</_.Deadline>
            </_.LastGroup>
        </_.DownGroup>
    </_.MenuArea>
            <_.MenuArea>
        <_.UpGroup>
            <_.Icon src= {net} alt='net'/>
            <_.Dday>D-30</_.Dday>
        </_.UpGroup>
        <_.DownGroup>
            <_.Projectname>네트워크 물품신청</_.Projectname>
            <_.LastGroup>
                <_.ProjectSub>최근 신청한 동아리는 팀 아라에요</_.ProjectSub>
                <_.Deadline>마감 시간 설정</_.Deadline>
            </_.LastGroup>
        </_.DownGroup>
    </_.MenuArea>
    </_.Container>
);
}
