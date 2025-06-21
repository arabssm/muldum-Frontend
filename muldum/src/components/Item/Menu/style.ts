import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    width: 100%;
    cursor: pointer;
`;

export const MenuArea = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: flex-start;
    width: 35%;
    background-color: #FAFAFA;
    border-radius: 12px;
    padding: 3% 3%;
    margin-bottom: 2%;
    cursor: pointer;
`;

export const Text = styled.div`
    justify-content: center;
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

export const Dday = styled.div`
    font-size: 1rem;
    background-color: #FF9B62;
    padding: 1.5% 2%;
    width: 12%;
    color: white;
    border-radius: 24px;
    border: none;
    text-align: center;
`;

export const Projectname = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: #1D1D1D;
`;

export const ProjectSub = styled.div`
    font-size: 1rem;
    color: #807F7E;
`;

export const Deadline = styled.button`
    display: flex;
    align-items: flex-end;
    font-size: 1rem;
    color: #B2B2B2;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Paperlogy';
`;

export const UpGroup = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 80%;
    margin-bottom: 3%;
`;

export const DownGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const LastGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 3%;
`;

export const Icon = styled.img`
    width: 5%;
`;