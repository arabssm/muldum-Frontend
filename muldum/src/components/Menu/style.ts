import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2%;
    width: 100%;
`;

export const MenuArea = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    width: 30%;
    background-color: #FAFAFA;
    border-radius: 12px;
    padding: 2% 5% 2% 2%;
    margin-bottom: 2%;
`;

export const Text = styled.div`
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: #1D1D1D;
    margin-bottom: 3%;
`;

export const Shortcut = styled.div`
    font-size: 16px;
    color: #707070;
    justify-content: center;
`;