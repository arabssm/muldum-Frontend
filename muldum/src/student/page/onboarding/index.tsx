import styled from '@emotion/styled';

import NavBar from '@_all/component/sibebar/sidebar';
import Slbe from '@_all/component/Slide/Slide';
import Menu from '@_all/component/menu/menu';
import Notice from '@_component/onboarding/notice/notice';


export default function Home(){

    return(
    <Container>
        <NavBar />
            <King>
                <Slbe/>
                <Menu />
                <Notice />
            </King>
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