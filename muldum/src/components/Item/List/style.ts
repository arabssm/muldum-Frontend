import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 0.1rem solid #B2B2B2;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const ItemIndex = styled.div<{ selected?: boolean }>`
  width: 3%;
  padding: 1%;
  border: none;
  border-right: 1px solid #B2B2B2;
  color: ${({ selected }) => (selected ? '#FF9B62' : '#323232')};
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const ItemName = styled.a`
  flex: 1;
  font-size: 1rem;
  padding: 1% 2%;
  color: #333;
  text-decoration: none;
  border-right: 1px solid #B2B2B2;

  &:hover {
    text-decoration: underline;
  }
`;

export const ItemInput = styled.input`
  width: 40%;
  padding: 1% 2%;
  border: none;
  font-size: 1rem;
  color: #323232;
  font-family: 'Paperlogy';

  &::placeholder {
    outline: none;
    color: #909090;
  }

  &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

