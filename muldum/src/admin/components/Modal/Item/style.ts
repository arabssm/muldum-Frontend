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
    width: 30%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 3% 0;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10%;
    margin-bottom: 1rem;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: #1D1D1D;
    margin-bottom: 1rem;
    text-align: left;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 10%;
`;

export const InfoRow = styled.div`
    display: flex;
    font-size: 0.95rem;
    line-height: 1.4;
`;

export const InfoLabel = styled.div`
    width: 3rem;
    font-size: 1rem;
    font-weight: 400;
    color: #909090;
    text-align: left;
`;

export const InfoValue = styled.div`
    flex: 1;
    font-weight: 500;
    color: #1D1D1D;
    word-break: break-all;
    text-align: left;
`;

export const Link = styled.a`
    color: #4b4b4b;
    text-decoration: underline;
    font-weight: 500;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 6%;
    margin-top: 8%;
`;

export const Yes = styled.button`
    width: 22%;
    padding: 2%;
    background-color: #ff9b62;
    color: white;
    border: none;
    border-radius: 4rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Paperlogy';
`;

export const No = styled.button`
    width: 22%;
    padding: 2%;
    background-color: white;
    color: #ff9b62;
    border: 0.1rem solid #ff9b62;
    border-radius: 4rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Paperlogy';
`;