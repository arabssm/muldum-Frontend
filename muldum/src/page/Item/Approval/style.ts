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
    margin-bottom: 3%;
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
    margin-bottom: 2.5%;
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
    border-radius: 4px;
`;

export const AddonsArea = styled.div`
    display: flex;
    justify-content: right;
    width: 90%;
    gap: 1.3rem;
    margin-bottom: 3%;
`;

export const Addons = styled.button`
    font-size: 1.2rem;
    color: #B2B2B2;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Paperlogy';

    :hover {
        color: #FF9B62;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: right;
    width: 90%;
    gap: 1.3rem;
    margin-bottom: 3%;
`;

export const ApplyButton = styled.button`
    display: flex;
    justify-content: center;
    padding: 1%;
    width: 10%;
    border-radius: 24px;
    background-color: #FF9B62;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Paperlogy';
    margin-top: 4%;
`;

export const Null = styled.div`
    display: flex;
    width: 82%;
    padding: 3% 4%;
    background-color: #FAFAFA;
    font-size:  1.3rem;
    color: #545454;
`;