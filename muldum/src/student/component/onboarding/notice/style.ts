import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 0.6rem;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #1d1d1d;
    font-weight: 600;
    margin-right: 54%;
`;

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 18.2rem;
    height: 2.5rem;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    padding-left: 1rem;
    margin-right: 1rem;
`;

export const SearchIcon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.875rem;
    padding: 0;
    font-family: 'Paperlogy';

    &::placeholder { color: #909090; }
    &:focus { outline: none; }
`;

export const ViewAll = styled.div`
    position: absolute;
    bottom: -3rem;
    right: 0;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #909090;
    cursor: pointer;

    :hover {
        color: #FF9B62;
    }
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 85%;
    padding: 1rem 0;
`;

export const Container = styled.div`
    display: flex;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1; 
`;

export const Badge = styled.div`
    background-color: #FF9B62;
    color: #fff;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 2rem;
`;

export const BigTitle = styled.h2`
    margin: 0;
    font-size: 1.3rem;
    color: #1E1E1E;
`;

export const DateText = styled.span`
    font-size: 0.875rem;
    color: #666;
    margin-left: 10%;
`;