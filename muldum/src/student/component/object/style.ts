import styled from '@emotion/styled';

export const Card = styled.div`
    background: #fff;
    border-radius: 0.75rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    overflow: hidden;
`;

export const FieldGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
`;

export const Label = styled.label`
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    color: #1D1D1D;
    margin-bottom: 0.5rem;
    width: 10%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #555;

    &:focus {
        outline: none;
        border-color: #ff9240;
        background-color: #fff;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 7.5rem;
    padding: 0.75rem 1rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    background-color: #fff;

    &:focus {
        outline: none;
        border-color: #ff9240;
    }
`;

export const TextareaDisplay = styled.div`
    width: 100%;
    min-height: 7.5rem;
    padding: 0.75rem 1rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #555;
    cursor: text;
`;

export const SubmitButton = styled.button`
    width: 7.5rem;
    padding: 0.75rem 0;
    background-color: #FF9B62;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    border-radius: 99px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-family: 'Paperlogy';
    margin-bottom: 2%;
    margin-left: 88%;

    &:hover {
        background-color: #ff7a1c;
    }
`;