import * as _ from './style';
import '../../App.css';
import Search from '../../assets/icon/Search.svg';
import Add from '../../assets/icon/Add.svg';
import NavBar from '../../components/NavBar/NavBar';

export default function Notice(){
    return(
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.Title>공지사항</_.Title>
                <_.SearchBar>
                    <img src={Search} alt='Search' />
                    공지사항 검색
                </_.SearchBar>
                <img src={Add} alt='Add' />
            </_.Wrapper>
        </_.Container>
    );
}