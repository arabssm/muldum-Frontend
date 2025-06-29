import * as _ from './style';
import '@_styles';
import { Props } from './type';

const Reason = [
    '구입처를 잘못 입력한 물품',
    '구매 사유가 적절하지 않은 물품',
    '가격이 과도하게 많이 나가는 물품',
    '기타사유',
];

export default function RejectReasonSelector({ rejectReason, setRejectReason }: Props) {
    return (
        <_.RejectReasonArea>
            {Reason.map((reason) => (
                <_.RejectButton
                    key={reason}
                    active={rejectReason === reason}
                    onClick={() => setRejectReason(reason)}
                >
                    {reason}
                </_.RejectButton>
            ))}
        </_.RejectReasonArea>
    );
}