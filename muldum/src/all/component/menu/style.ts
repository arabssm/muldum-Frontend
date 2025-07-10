import styled from "@emotion/styled";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FAFAFA;     
    border-radius: 0.625rem;       
    padding: 5% 5%;    
    width: 82%;
    margin-left: 9%;
    cursor: pointer;
    
    &:hover {
        background: #efefef;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #1d1d1d;
`;

export const LinkText = styled.span`
    margin-top: 2%;
    font-size: 0.9rem;
    color: #707070;
    line-height: 1.4;
    font-weight: 500;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
`;

export const H1 = styled.h2`
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #1D1D1D;
    font-weight: 500;
    margin-left: 3.2%;
`;

export const H2 = styled.h4`
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #707070;
    font-weight: 500;
    margin-top: 0.2%;
    margin-bottom: 2%;
    margin-left: 3.2%;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(100%, 1fr));
    row-gap: 1rem;
    column-gap: 0.8%;
    width: 100%;
    max-width: 40rem;
    gap: 1rem;
`;