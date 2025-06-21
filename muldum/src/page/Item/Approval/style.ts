import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    margin-left: 15%;
`;

export const Title = styled.div`
    display: flex;
    justify-content: left;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1D1D1D;
    margin-bottom: 1%;
    margin-top: 3%;
`;

export const Subtitle = styled.div`
    display: flex;
    justify-content: left;
    font-size: 1.2rem;
    color: #707070;
    margin-bottom: 5%;
`;

export const ButtonArea = styled.div`
    display: flex;
    width: 90%;
    border: none;
    border-bottom: 1px solid #B2B2B2;
    gap: 2rem;
    margin-bottom: 2%;
`;

export const ApprovalButton = styled.button<{ active?: boolean }>`
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    border-bottom: 3px solid ${({ active }) => (active ? '#FF9B62' : 'none')};
    color: #1D1D1D;
    cursor: pointer;
    font-family: 'Paperlogy';
`;

export const ClubArea = styled.div`
    display: flex;
    width: 90%;
    border: none;
    gap: 1.3rem;
    margin-bottom: 2%;
`;

export const ClubName = styled.div<{ selected?: boolean }>`
    padding: 0.7rem 1rem;
    border: 1px solid ${({ selected }) => (selected ? '#FF9B62' : '#B2B2B2')};
    background-color: ${({ selected }) => (selected ? '#FFF5EF' : 'white')};
    border-radius: 4px;
    cursor: pointer;
`;

export const DetailArea = styled.div`
    width: 86%;
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 8px;
`;