import * as _ from './style';
import Menu from '@_all/component/menu/menu';
import Slider from '@_all/component/Slide/Slide';
import NavBar from '@_all/component/sibebar/sidebar';
import '@_styles';

export default function Main(){
return (
    <_.Container>
        <NavBar />
        <Slider />
        <Menu />
    </_.Container>
)}