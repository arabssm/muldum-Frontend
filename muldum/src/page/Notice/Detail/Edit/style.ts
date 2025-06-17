import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 2%;
    margin-left: 14%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const PageTitle = styled.div`
    display: flex;
    justify-content: left;
    margin-bottom: 3%;
    font-weight: 600;
    font-size: 1.5rem;
    color: #1D1D1D;
`;

export const BoxGroup = styled.div`
    width: 90%;
`;

export const Text = styled.div`
    padding: 1.3%;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    color: #1D1D1D;
    font-size: 1rem;
    margin-bottom: 2%;
`;

export const TagBox = styled.div`
    padding: 1.5%;
    font-size: 1.3rem;
    color: #909090;
    border-bottom: 1px solid #D1D1D1;
    margin-bottom: 2%;
`;

export const Content = styled.div`
    display: flex;
    padding: 1.5%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 1.3%;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    color: #1D1D1D;
    margin-bottom: 4%;
`;

export const Picture = styled.div`
    display: flex;
    border-radius: 4px;
    width: 100%;
    height: 30vh;
    background-color: gray;
    font-size: 1rem;
    font-weight: 400;
    color: white;
    align-items: center;
    justify-content: center;
    margin-bottom: 6%;
`;

export const EnrollButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    width: 13%;
    border-radius: 24px;
    background-color: #FF9B62;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Paperlogy';
`;