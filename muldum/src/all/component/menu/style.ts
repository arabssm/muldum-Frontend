import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: #1D1D1D;
    font-weight: 500;
`;

export const Subtitle = styled.div`
    font-size: 1rem;
    color: #707070;
    font-weight: 400;
    margin-bottom: 1.5rem;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 1rem; 
    width: 94%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FAFAFA;
    border-radius: 0.625rem;
    margin-top: 1rem;
    padding: 2rem 1.5rem;
    cursor: pointer;

    &:hover {
        background: #EFEFEF;
    }
`;

export const CardTitle = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    color: #1D1D1D;
    margin-bottom: 0.5rem;
`;

export const LinkText = styled.span`
    font-size: 0.9rem;
    color: #707070;
    font-weight: 500;
`;
