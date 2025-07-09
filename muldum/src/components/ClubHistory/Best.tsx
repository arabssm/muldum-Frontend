import * as _ from './style';
import temporary from '@_assets/icon/temporary.svg';

export default function Best(){
    return (
        <_.Container>
            <_.Wrapper>
                <_.TopBox>
                    <_.Topaward>대상</_.Topaward>
                    <_.Group>
                        <_.temporaryicon src={temporary} alt='icon' /> 
                        <_.ClubName>밤돌이로</_.ClubName>
                    </_.Group>
                    <_.explanation>대서양 한가운데에서 밤돌이로를 외치다</_.explanation>
                    <_.Detail>자세히 보기</_.Detail>
                </_.TopBox>
            </_.Wrapper>
            <_.Box>
                <_.Groupping>
                    <_.award>인기상</_.award>
                    <_.temporaryicon src={temporary} alt='icon' /> 
                    <_.ClubName>인서트</_.ClubName>
                    <_.otherexplanation>sohegiooiefowegionwegniweng</_.otherexplanation>
                </_.Groupping>
            </_.Box>
        </_.Container>
    )
}