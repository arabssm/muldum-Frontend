import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 25rem; 
    padding: 2.5rem;
    background: #fff;
    border-radius: 1.25rem; 
    text-align: center;
`;

export const Title = styled.div`
    font-size: 1.5rem; 
    font-weight: 500;
    margin-bottom: 1.875rem;
`;

export const InputWrap = styled.div`
    display: flex;
    align-items: center;
    background: #FAFAFA;
    color: #1E1E1E;
    border-radius: 0.625rem; 
    padding: 1rem 0.9375rem;
    margin-bottom: 1.25rem;

    img {
        width: 1.25rem;
        margin-right: 0.625rem; 
    }

    input {
        border: none;
        background: transparent;
        flex: 1;
        font-size: 1rem;
        outline: none;
        font-family: 'Paperlogy';
    }

    input::placeholder {
        color: #B2B2B2;
    }
`;

export const LoginButton = styled.button`
    background-color: #FF9B62;
    color: #fff;
    border: none;
    padding: 0.75rem 0;
    border-radius: 1.875rem;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-top: 1.3rem;
    font-family: 'Paperlogy';
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #aaa;
    font-size: 0.875rem;
    cursor: pointer;
    font-family: 'Paperlogy';
`;
