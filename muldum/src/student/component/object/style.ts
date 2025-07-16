import styled from '@emotion/styled';

export const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    margin-bottom: 2%;
    overflow: hidden;
`;

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
`;

export const Cell = styled.div<{ flex: string }>`
    flex: ${({ flex }) => flex};
    font-size: 0.875rem;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ReasonRow = styled.div`
    padding: 0.75rem 1rem;
    background: #fafafa;
    color: #555;
    cursor: text;
`;

export const ReasonTextarea = styled.textarea`
    width: 100%;
    border: none;
    resize: none;
    background: transparent;
    font-size: 0.875rem;
    line-height: 1.5;
    outline: none;
`;
export const ResubmitButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #ff6767;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #ff3d3d;
  }
`;
