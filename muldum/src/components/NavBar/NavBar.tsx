import { icons } from '../NavBar/icon';
import * as _ from './style';
import '../../App.css';

export default function NavBar(){
    return (
        <_.Container>
            <img src={icons.alarm} alt="alarm" />
        </_.Container>
    )
}