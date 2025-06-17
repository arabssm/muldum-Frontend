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
    padding: 3% 0;
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
    margin: 1%;
`;

export const counts = styled.div`
    font-size: 1.2rem;
    color: #b2b2b2;
`;

export const CheckIcon = styled.img`
    width: 20%;
    margin-bottom: 3%;
`;