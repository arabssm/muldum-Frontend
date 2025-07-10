import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    width: 100%;
`;

export const MenuArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: flex-start;
    width: 35%;
    background-color: #FAFAFA;
    border-radius: 0.625rem;
    padding: 2.5% 6% 2.5% 3%;
    margin-bottom: 2%;
    cursor: pointer;
`;

export const Text = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1D1D1D;
    margin-bottom: 3%;
`;

export const Shortcut = styled.div`
    font-size: 1rem;
    color: #707070;
    justify-content: center;
`;