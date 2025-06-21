import * as _ from './style';
import Menu from '@_menu/Menu';
import Slider from '@_components/Slide/Slide';
import NavBar from '@_navbar/NavBar';
import '@_styles';

export default function Main(){
return (
    <_.Container>
        <NavBar />
        <Slider />
        <_.Title>메뉴</_.Title>
        <_.Subtitle>원하는 항목을 선택하여 이동하세요</_.Subtitle>
        <Menu />
    </_.Container>
)
}