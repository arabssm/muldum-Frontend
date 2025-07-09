import * as _ from '@_pages/Item/Approval/style';
import { Props } from '@_pages/Item/Approval/type';
import { Reason } from '@_pages/Item/Approval/Reason';
import '@_styles';

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