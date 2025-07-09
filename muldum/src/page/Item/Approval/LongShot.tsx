import * as _ from './style';
import '@_styles';
import { Props } from './type';
import { Reason } from './data';

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