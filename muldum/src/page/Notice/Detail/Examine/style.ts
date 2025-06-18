import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-left: 6%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 2%;
    width: 100%;
    margin-left: 8%;
`;

export const PageTitle = styled.div`
    display: flex;
    justify-content: left;
    margin-bottom: 1%;
    font-weight: 600;
    font-size: 1.5rem;
    color: #1D1D1D;
`;

export const Addition = styled.span`
    font-size: 0.8rem;
    color: #B2B2B2;
`;

export const Image = styled.img`
    width: 90%;
    border-radius: 4px;
    margin-top: 3%;
`;

export const ImageCaption = styled.span`
    font-size: 0.8rem;
    margin-top: 1%;
    color: #B2B2B2;
`;

export const Content = styled.div`
    margin-top: 1%;
    line-height: 1;
    font-size: 1rem;
`;

export const BackButton = styled.button`
    margin-top: 2%;
    padding: 0.5% 1%;
    font-size: 0.8rem;
    background-color: #FF9B62;
    color: #fff;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    align-self: flex-start;
    font-family: 'Paperlogy';
`;

export const AdditionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    margin-top: 1%;
`;

export const AdditionLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 4px;

    button {
        background: none;
        border: none;
        color: #909090;
        cursor: pointer;
        font-size: 0.8rem;
        font-family: 'Paperlogy';

        &:hover {
            color: #FF9B62;
        }
    }
`;