import styled from '@emotion/styled';
import Slider from 'react-slick';

export const High = styled.div`
    width: 90%;
    border-radius: 12px;
    overflow: hidden;
`;

export const StyledSlider = styled(Slider)`
    width: 100%;
`;

export const SlideWrapper = styled.div`
    position: relative;
    width: 80%;
    height: 220px;
    overflow: hidden;
    margin: 20px auto;
    border-radius: 12px;
    color: #FFFFFF;
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
`;

export const Legendimg = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Title = styled.div`
    position: absolute;
    font-size: 2.5rem;
    font-weight: bold;
    top: 15%;
    left: 4%;
    width: 400px;
`;

export const SubTitle = styled.div`
    font-size: 1.5rem;
    position: absolute;
    left: 4%;
    top: 69%;
`;

export const Date = styled.div`
    font-size: 1.5rem;
    position: absolute;
    left: 4%;
    top: 57%;
`;

export const Ddate = styled.div`
    position: absolute;
    font-size: 5rem; 
    font-weight: 600;
    top: 27%;
    left: 70%;
    width: auto;
    border-radius: 8px;
`;

export const Index = styled.div`
    position: absolute;
    left: 97%;
    top: 85%;
`;
