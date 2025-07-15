import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    width: 20%;
    border-radius: 1rem;
    text-align: center;
`;

export const Title = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Message = styled.div`
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #555;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const Button = styled.button`
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 2rem;
    border: 0.1rem solid #FF9B62;
    background-color: #FF9B62;
    color: white;
    font-family: 'Paperlogy';
    cursor: pointer;

    &:hover {
        background-color: #FF7B2F;
    }

    &.cancel {
        background-color: white;
        color: #FF7B2F;
    }
`;