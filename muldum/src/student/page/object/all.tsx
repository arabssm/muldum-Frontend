import { useEffect, useState } from 'react';
import * as _ from './style'; 
import Sidebar from '@_all/component/sibebar/sidebar';
import {Box1} from '@_component/object/box';
import type { Request } from '@_component/object/types';
import { getallApply } from '@_api/object/apply';

export default function All() {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    getallApply(1)
      .then((data) => {
        setRequests(data);
      })
      .catch((err) => {
        console.log( err);
      });
  }, []);

  return (
    <_.PageWrapper>
      <Sidebar />
      <_.Container>
        <_.Main>
          <_.TextContainer>
            <_.AllTitle>전공동아리 물품 재신청</_.AllTitle>
            <_.Subtitle>신청 거부 당한 물품을 확인하고 비슷한 상품을 구입해요</_.Subtitle>
          </_.TextContainer>
          <_.AllTitle>신청한 물품</_.AllTitle>
          <_.ListWrapper>
              {requests
                .filter(r => r.status !== "INTEMP")
                .map(r => (
                  <Box1
                  key={r.id}
                  request={{
                    ...r,
                    status:
                      r.status === "REJECTED"
                        ? "거절됨"
                        : r.status,
                  }}
                />
              ))}
          </_.ListWrapper>
        </_.Main>
      </_.Container>
    </_.PageWrapper>
  );
}