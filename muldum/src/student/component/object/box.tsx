import { useState, useEffect, useRef } from "react";
import type { Props, Request } from "./types";
import * as _ from "./style";

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
      <_.FieldGroup>
        <_.Input
          type="text"
          value={request.productName}
          readOnly
          placeholder="원래 있던 거 가져오기"
        />
      </_.FieldGroup>

      <_.FieldGroup>
        <_.Label>재신청 사유</_.Label>
        {isEditing ? (
          <_.Textarea
            ref={textareaRef}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            onBlur={finishEdit}
            placeholder="재신청 사유를 10자 이상 입력해 주세요"
          />
        ) : (
          <_.TextareaDisplay onClick={() => setIsEditing(true)}>
            {reason || "재신청 사유를 10자 이상 입력해 주세요"}
          </_.TextareaDisplay>
        )}
      </_.FieldGroup>

      <_.SubmitButton>재신청</_.SubmitButton>
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
    alert(`${request.id}번 재신청이 완료되었습니다.`);
  };

  return (
      <_.Card>
        <_.FieldGroup>
          <_.Label>구입한 물품</_.Label>
          <_.Input type="text" value={request.productName} readOnly />
        </_.FieldGroup>

        <_.FieldGroup>
          <_.Label>재신청 사유</_.Label>
          {isEditing ? (
            <_.Textarea
              ref={textareaRef}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onBlur={finishEdit}
              placeholder="재신청 사유를 10자 이상 입력해 주세요"
            />
          ) : (
            <_.TextareaDisplay onClick={() => setIsEditing(true)}>
              {reason || "재신청 사유를 10자 이상 입력해 주세요"}
            </_.TextareaDisplay>
          )}
        </_.FieldGroup>

        {request.status === "거절됨" && (
          <_.SubmitButton onClick={handleResubmit}>재신청</_.SubmitButton>
        )}
      </_.Card>
  );
}
