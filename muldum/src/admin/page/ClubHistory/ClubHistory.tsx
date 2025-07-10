import { useState } from "react";
import * as _ from "./style";
import NavBar from "src/admin/components/NavBar/NavBar";
import Best from "src/admin/components/ClubHistory/Best";

export default function ClubHistory() {
    const periods = ['1기', '2기', '3기'];
    const [currentIndex, setCurrentIndex] = useState(periods.length - 1);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        const index = periods.indexOf(selected);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    };

    return (
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.Title>역대 전공동아리</_.Title>
                <_.Subtitle>이때까지 전공동아리 활동 전적을 확인해요</_.Subtitle>

                <_.PeriodSelect value={periods[currentIndex]} onChange={handleChange}>
                    <option value="">선택</option>
                    {periods.map((period, idx) => (
                        <_.PeriodOption key={idx} value={period}>
                            {period}
                        </_.PeriodOption>
                    ))}
                </_.PeriodSelect>

                <Best period={periods[currentIndex]} />
            </_.Wrapper>
        </_.Container>
    );
}