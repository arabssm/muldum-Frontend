import { useEffect, useState } from 'react';
import * as _ from './style'; 
import Sidebar from '../../../all/component/sibebar/sidebar';
import Box from '../../component/object/box';
import type { Request } from '../../component/object/types';
import { getallApply } from '../../../api/object/apply';

export default function All() {
  const [requests, setRequests] = useState<Request[]>([]);
  const handleReasonChange = (id: string, newReason: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, reason: newReason } : r))
    );
  };
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
          <_.Header>
            <_.AllTitle>전체 물품 신청 내역</_.AllTitle>
          </_.Header>
          <_.ListWrapper>
          {requests
  .filter(r => r.status !== "INTEMP")
  .map(r => (
    <Box
      key={r.id}
      request={{
        ...r,
        status:
          r.status === "APPROVED"
            ? "승인됨"
            : r.status === "PENDING"
            ? "대기중"
            : r.status, 
      }}
      onReasonChange={handleReasonChange}
    />
  ))}

          </_.ListWrapper>
        </_.Main>
      </_.Container>
    </_.PageWrapper>
  );
}
