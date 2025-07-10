import { useState } from 'react';
import * as _ from './style';

const ReasonButtons = () => {
  const Reason = [
    '구입처를 잘못 입력한 물품',
    '구매 사유가 적절하지 않은 물품',
    '가격이 과도하게 많이 나가는 물품',
    '기타사유',
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <_.rescontainer>
      {Reason.map((r, idx) => (
        <_.reabtn
          key={idx}
          selected={selected === idx}
          onClick={() => setSelected(idx)}
        >
          {r}
        </_.reabtn>
      ))}
    </_.rescontainer>
  );
};

export default ReasonButtons;