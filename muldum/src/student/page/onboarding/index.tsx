import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { loginModalState, whereismypasswordModalState } from "@_all/atom/Modal";
import LoginModal from '@_component/modal/login/login';
import NavBar from '@_all/component/sibebar/sidebar';
import Slbe from '@_all/component/Slide/Slide';
import Menu from '@_all/component/menu/menu';
import Notice from '@_component/onboarding/notice/notice';
import PasswordModal from '@_component/modal/password/password';

export default function Home(){
    const isOpen = useRecoilValue(loginModalState)
    const isOpen2=useRecoilValue(whereismypasswordModalState);

    return(
    <Container>
        < NavBar/>
            <King>
                <Slbe/>
                <Menu />
                <Notice />
            </King>
            {isOpen && <LoginModal />}
            {isOpen2 && <PasswordModal />}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-left: 3%;
    margin-top: 2%;
    overflow: auto;
`;

const King =styled.div`
    width: 100%;
    display: flex;
    margin-left: 15%;
    flex-direction: column;
    gap: 3rem;
`;