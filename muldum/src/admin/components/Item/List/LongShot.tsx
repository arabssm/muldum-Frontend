import * as _ from 'src/admin/page/Item/Approval/style';
import { Props } from 'src/admin/page/Item/Approval/type';
import { Reason } from 'src/admin/page/Item/Approval/Reason';
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