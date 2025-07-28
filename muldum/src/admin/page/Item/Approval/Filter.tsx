import * as _ from './style';
import { FilterProps } from './type'

export default function FilterToggle({ filter, setFilter }: FilterProps) {
    return (
        <_.ButtonArea>
            <_.ApprovalButton onClick={() => setFilter('가능')} active={filter === '가능'}>
                승인 가능
            </_.ApprovalButton>
        </_.ButtonArea>
    );
}