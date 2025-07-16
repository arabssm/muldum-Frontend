import { useSearchParams } from 'react-router-dom';
import * as _ from './style';
import Sidebar from '../../../all/component/sibebar/sidebar';

export default function Resendpage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); 

  return (
    <_.PageWrapper>
      <Sidebar />
      <_.Container>
        <_.Main>
          <_.TextContainer>
            <_.Title>전공동아리 물품 재신청</_.Title>
            <_.Subtitle>신청 거부 당한 물품을 확인하고 비슷한 상품을 구입해요</_.Subtitle>
          </_.TextContainer>
          <_.SectionTitle>신청한 물품</_.SectionTitle>
          <_.InputBlock>
            <_.Label>구입할 물품</_.Label>
            <_.Input1
              as="input"
              type="text"
              placeholder="구입할 물품을 입력해주세요"  
              value={name ?? ''}
              readOnly
            />
            <_.Label>신청 사유</_.Label>
            <_.Textarea placeholder="거절 사유를 10자 이상 입력해주세요" />
            <_.RejectButton>재신청하기</_.RejectButton>
          </_.InputBlock>
        </_.Main>
      </_.Container>
    </_.PageWrapper>
  );
}
