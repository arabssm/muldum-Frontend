import styled from '@emotion/styled';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 28%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 4% 0;
    text-align: center;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: #1d1d1d;
`;

export const SubTitle = styled.div`
    font-size: 1.1rem;
    color: #b2b2b2;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 6%;
    margin-top: 8%;
`;

export const Yes = styled.button`
    width: 16%;
    padding: 2%;
    background-color: #ff9b62;
    color: white;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    gap: 3%;
    font-family: 'Paperlogy';
`;

export const No = styled.button`
    width: 22%;
    padding: 2%;
    background-color: white;
    color: #ff9b62;
    border: 0.1rem solid #ff9b62;
    border-radius: 5rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Paperlogy';
`;
