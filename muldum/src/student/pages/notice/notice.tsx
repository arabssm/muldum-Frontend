import Notice from "../../component/onboarding/notice/notice";
import Sidebar from "@_components/Slide/Slide";
import styled from "@emotion/styled";
export default function Notice1(){
    return(
        <Container>
        <Sidebar />
        <Notice />
        </Container>
    );
}
const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-left: 15%;
    flex-direction: column;
    gap: 3.25rem;
`;