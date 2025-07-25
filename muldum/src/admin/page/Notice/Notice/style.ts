import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;
    margin-left: 6%;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1%;
    margin-top: 2%;
    margin-left: 7%;
    width: 90%;
    gap: 26%;
    margin-bottom: 3%;
`;

export const PageTitle = styled.div`
    display: flex;
    justify-content: left;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1D1D1D;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: 2vh;
    padding: 1%;
    background-color: #FAFAFA;
    color: #909090;
    border-radius: 12px;
    gap: 4%;
    margin-left: 2%;
    font-size: 1rem;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 1rem;
    color: #1D1D1D;
    font-family: 'Paperlogy';
`;

export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    margin-left: 7%;
    padding: 1.2% 1%;
    cursor: pointer;
    background-color: #fff;
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2%;
`;

export const Badge = styled.div`
    background-color: #FF9B62;
    color: #fff;
    padding: 1% 2%;
    font-size: 1rem;
    border-radius: 3rem;
    line-height: 1;
`;

export const BoxTitle = styled.h2`
    margin: 0;
    font-size: 1.2rem;
    color: #1E1E1E;
`;

export const DateText = styled.span`
    font-size: 0.8rem;
    color: #909090;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 0;
    gap: 1%;
`;

export const PageButton = styled.button<{ active?: boolean }>`
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 20rem;
    padding: 0.7% 1%;
    cursor: pointer;

    ${({ active }) =>
        active &&
        `
        background-color: #FFF5EF;
        color: #FF9B62;
    `}
`;

export const Add = styled.img`
    cursor: pointer;
`;