import { useState } from "react";
import * as _ from "./style";
import NavBar from "@_components/NavBar/NavBar";
import arrow from '@_assets/icon/arrow.svg';

export default function ClubHistory() {
    const periods = ['1기', '2기', '3기'];
    const [currentIndex, setCurrentIndex] = useState(periods.length - 1);

    const handleToggle = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % periods.length);
    };

    return (
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.Title>역대 전공동아리</_.Title>
                <_.Subtitle>이때까지 전공동아리 활동 전적을 확인해요</_.Subtitle>
                <_.period onClick={handleToggle}>
                    <_.PeriodtText>{periods[currentIndex]}</_.PeriodtText>
                    <_.arrow src={arrow} alt="arrow" />
                </_.period>
            </_.Wrapper>
        </_.Container>
    );
}