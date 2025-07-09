import styled from '@emotion/styled';
import arrow from '@_assets/icon/arrow.svg'

export const Container = styled.div`
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 100%;
    margin-left: 14.5%;
`;

export const Title = styled.div`
    display: flex;
    justify-content: left;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1D1D1D;
    margin-bottom: 1%;
    margin-top: 2%;
`;

export const Subtitle = styled.div`
    display: flex;
    justify-content: left;
    font-size: 1.2rem;
    color: #707070;
    margin-bottom: 3%;
`;

export const period = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.1rem solid #909090;
    border-radius: 0.25rem;
    margin-bottom: 4%;
    padding: 0.4% 0.6%;
    cursor: pointer;
    font-family: 'Paperlogy';
`;

export const PeriodtText = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    color: #909090;
`;

export const PeriodSelect = styled.select`
    padding: 0.4% 0.6%;
    border: 0.1rem solid #909090;
    border-radius: 0.25rem;
    background-color: transparent;
    font-family: 'Paperlogy';
    font-size: 0.8rem;
    font-weight: 500;
    color: #909090;
    cursor: pointer;
    margin-bottom: 4%;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: right 0.2rem center;
`;

export const PeriodOption = styled.option`
    background-color: white;
    color: #1D1D1D;
`;

export const CelebrateEmoji = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 50px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    animation: pop-up 1s ease-out forwards;
    pointer-events: none;
    z-index: 9999;

    @keyframes pop-up {
        0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        }
        100% {
        transform: translate(-50%, -150%) scale(2);
        opacity: 0;
        }
    }
`;