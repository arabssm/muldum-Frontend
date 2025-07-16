import { useState, useEffect, useRef } from "react";
import type { Props, Request } from "./types";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";
export default function Box({ request, onReasonChange }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [reason, setReason] = useState(request.reason);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const nav=useNavigate();
  const isEditable = request.status === "PENDING";

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
<_.CardRow
  onClick={() => {
    console.log(request.status);
    if (request.status.toUpperCase() === "거절됨") {
      nav(`/object/detail/${request.id}?name=${request.productName}`);
    }
  }}
>
        <_.Cell flex="0 0 40px">{request.id}</_.Cell>
        <_.Cell flex="1">{request.productName}</_.Cell>
        <_.Cell flex="0 0 60px">수량 {request.quantity}</_.Cell>
        <_.Cell flex="0 0 100px">{request.status}</_.Cell>
      </_.CardRow>
      <_.ReasonRow
        onClick={() => {
          if (!isEditing && isEditable) setIsEditing(true);
        }}
      >
        {isEditing ? (
          <_.ReasonTextarea
            ref={textareaRef}
            value={reason}
            onChange={e => setReason(e.target.value)}
            onBlur={finishEdit}
          />
        ) : (
          reason || "구매 사유를 입력해 주세요"
        )}
      </_.ReasonRow>
    </_.Card>
  );
}
