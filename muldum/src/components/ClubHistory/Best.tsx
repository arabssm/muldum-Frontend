import * as _ from './style';
import temporary from '@_assets/icon/temporary.svg';
import { topData, bottomData } from './data';

export default function Best() {
    return (
        <_.Container>
            <_.Wrapper>
                {topData.map(item => (
                    <_.TopBox key={item.idx}>
                        <_.Topaward>{item.level}</_.Topaward>
                        <_.Group>
                            <_.temporaryicon src={temporary} alt='icon' />
                            <_.ClubName>{item.name}</_.ClubName>
                        </_.Group>
                        <_.explanation>{item.explanation}</_.explanation>
                        <_.Detail>자세히 보기</_.Detail>
                    </_.TopBox>
                ))}
            </_.Wrapper>

            {bottomData.map(item => (
                <_.Box key={item.idx}>
                    <_.Groupping>
                        <_.award>{item.level}</_.award>
                        <_.temporaryicon src={temporary} alt='icon' />
                        <_.ClubName>{item.name}</_.ClubName>
                        <_.otherexplanation>{item.explanation}</_.otherexplanation>
                    </_.Groupping>
                </_.Box>
            ))}
        </_.Container>
    );
}
