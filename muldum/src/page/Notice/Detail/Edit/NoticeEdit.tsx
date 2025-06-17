import * as _ from './style';
import NavBar from '../../../../components/NavBar/NavBar';

export default function NoticeEdit() {
    return(
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.PageTitle>공지사항 수정</_.PageTitle>
                <_.BoxGroup>
                    <_.Text>TSMC, AI칩 수요 견조 재확인…삼성·SK, HBM 사업 성장세 '쾌청'</_.Text>
                    <_.Text>2008.12.09 ~ 2009.12.19</_.Text>
                    <_.TagBox> h1  h2  h3  h4  B</_.TagBox>
                    <_.Content>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                    </_.Content>
                    <_.Picture>사진을 변경할려면 사진을 클릭하여 변경하세요</_.Picture>
                    <_.EnrollButton>등록하기</_.EnrollButton>
                </_.BoxGroup>
            </_.Wrapper>
        </_.Container>
    );

}
