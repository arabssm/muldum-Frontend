import * as _ from './style';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import Slider from '../../components/Slide/Slide'
import '../../App.css';

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