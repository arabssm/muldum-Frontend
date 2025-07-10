import * as _ from './style';
import temporary from '@_assets/Item/temporary.svg';
import { topDataByPeriod, bottomDataByPeriod } from './data';
import type { BestProps } from './types';

export default function Best({ period }: BestProps) {
    const topData = topDataByPeriod[period] || [];
    const bottomData = bottomDataByPeriod[period] || [];

    const handleAlert = () => {
        alert('현재 작성된 내용이 없습니다.');
    };

    return (
        <_.Container>
            <_.Wrapper>
                {topData.map(item => (
                    <_.TopBox key={item.idx}>
                        <_.Topaward>{item.level}</_.Topaward>
                        <_.Group>
                            <_.temporaryicon src={temporary} alt='icon' />
                            <_.Name>{item.name}</_.Name>
                        </_.Group>
                        <_.explanation>{item.explanation}</_.explanation>
                        <_.Detail onClick={() => { handleAlert(); }}>
                            자세히보기
                        </_.Detail>
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
