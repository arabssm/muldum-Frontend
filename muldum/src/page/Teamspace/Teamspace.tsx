import * as _ from './style';
import '@_styles'
import NavBar from '@_components/NavBar/NavBar';
import Team from '@_components/Teamspace/Team';

export default function Teamspace(){
    return(
        <_.Container>
            <NavBar />
            <_.Wrapper>
                <_.Title>동아리 팀원들을 배치해요</_.Title>
                <_.Subtitle>각 동아리 별로 팀원들을 배치하고 관리해요</_.Subtitle>
                <Team />
            </_.Wrapper>
        </_.Container>
    )
}