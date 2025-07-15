import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(0.1rem);
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 23%; 
    height: auto;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 3rem 2rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
    z-index: 1001;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #1D1D1D;
    margin-bottom: 2rem;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1.25rem;
`;

export const IconImg = styled.img`
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.6;
`;

export const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 3rem;
    padding: 0 0.75rem 0 2.75rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #FAFAFA;
    font-size: 0.9375rem;
    color: #333333;
    outline: none;
    font-family: 'Paperlogy';

    &::placeholder {
        color: #B2B2B2;
        font-size: 1rem;
    }

    &:focus {
        background-color: #e8e8e8;
    }
`;

export const LoginButton = styled.button`
    width: 80%;
    height: 3rem;
    margin-top: 1.5rem;
    background-color: #FF9B62;
    color: #ffffff;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Paperlogy';

    &:hover {
        background-color: #FF8946;
    }
    &:active {
        background-color: #FF8946;
    }
`;

export const GoPassword = styled.div`
    margin-top: 0.75rem;
`;

export const PasswordLink = styled.a`
    font-size: 0.875rem;
    color: #707070;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #333333;
        text-decoration: underline;
    }
`;