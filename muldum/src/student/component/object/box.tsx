import { useState, useEffect, useRef } from 'react';
import type { Props,Request } from './types';
import * as _ from './style';

export default function Box({ request, onReasonChange }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [reason, setReason] = useState(request.reason);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const finishEdit = () => {
    setIsEditing(false);
    onReasonChange(request.id, reason.trim());
  };

  return (
    <_.Card>
      <_.CardRow>
        <_.Cell flex="0 0 40px">{request.id}</_.Cell>
        <_.Cell flex="1">{request.productName}</_.Cell>
        <_.Cell flex="0 0 60px">수량 {request.quantity}</_.Cell>
        <_.Cell flex="0 0 100px">{request.status}</_.Cell>
      </_.CardRow>
      <_.ReasonRow onClick={() => !isEditing && setIsEditing(true)}>
        {isEditing ? (
          <_.ReasonTextarea
            ref={textareaRef}
            value={reason}
            onChange={e => setReason(e.target.value)}
            onBlur={finishEdit}
          />
        ) : (
          reason || '구매 사유를 입력해 주세요'
        )}
      </_.ReasonRow>
    </_.Card>
  );
}

export function Box1({ request }: { request: Request }) {
  const [isEditing, setIsEditing] = useState(false);
  const [reason, setReason] = useState(request.reason);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const finishEdit = () => {
    setIsEditing(false);
  };

  const handleResubmit = () => {
    alert(`${request.id}번 재신청!`);
  };

  return (
    <_.Card>
      <_.CardRow>
        <_.Cell flex="0 0 40px">{request.id}</_.Cell>
        <_.Cell flex="1">{request.productName}</_.Cell>
        <_.Cell flex="0 0 60px">수량 {request.quantity}</_.Cell>
        <_.Cell flex="0 0 100px">{request.status}</_.Cell>
      </_.CardRow>

      <_.ReasonRow onClick={() => !isEditing && setIsEditing(true)}>
        {isEditing ? (
          <_.ReasonTextarea
            ref={textareaRef}
            value={reason}
            onChange={e => setReason(e.target.value)}
            onBlur={finishEdit}
          />
        ) : (
          reason || '구매 사유를 입력해 주세요'
        )}
      </_.ReasonRow>

      {request.status === "거절됨" && (
        <_.ResubmitButton onClick={handleResubmit}>
          재신청하기
        </_.ResubmitButton>
      )}
    </_.Card>
  );
}
