import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as _ from './style';
import sliderSettings from './Setting';
import Data from './data';
import '../../App.css';

export default function SliderComponent() {
    return (
        <_.High>
        <_.StyledSlider {...sliderSettings}>
            {Data.map((item, index) => (
            <_.SlideWrapper key={index}>
                <_.Legendimg src={item.img} alt="slide" />
                <_.Overlay />
                <_.Title>{item.title}</_.Title>
                <_.Date>{item.date}</_.Date>
                <_.SubTitle>{item.subtitle}</_.SubTitle>
                <_.Ddate>{item.dDay}</_.Ddate>
                <_.Index>{index + 1}/{Data.length}</_.Index>
            </_.SlideWrapper>
            ))}
        </_.StyledSlider>
        </_.High>
    );
}
