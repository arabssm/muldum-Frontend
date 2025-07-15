import * as _ from './style';
import NavBar from '@_all/component/sibebar/sidebar';
import Menu from '@_menu/Menu';
import '@_styles';

export default function ProjectChoice(){
    return (
        <_.Container>
            <NavBar />
            <_.Title>물품 승인 프로젝트 선택</_.Title>
            <_.Subtitle>물품을 승인할 프로젝트를 선택해주세요</_.Subtitle>
            <Menu />
        </_.Container>
    )
}