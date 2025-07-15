import { useState } from 'react';
import * as _ from './style';
import ApprovalModal from '@_modal/Approval/ApprovalModal';

export default function DetailItem({ name, onClose }: { name: string; onClose: () => void }) {
    const [showApprovalModal, setShowApprovalModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(true);

    const handleApprove = () => {
        setShowDetailModal(false);
        setShowApprovalModal(true);
    };

    const closeApprovalModal = () => {
        setShowApprovalModal(false);
    };

    return (
        <>
            {showDetailModal && (
                <_.Container>
                    <_.Modal>
                        <_.TitleArea>
                            <_.Title>{name}</_.Title>
                        </_.TitleArea>
                        <_.InfoArea>
                            <_.InfoRow>
                                <_.InfoLabel>가격</_.InfoLabel>
                                <_.InfoValue>30000000</_.InfoValue>
                            </_.InfoRow>
                            <_.InfoRow>
                                <_.InfoLabel>개수</_.InfoLabel>
                                <_.InfoValue>7</_.InfoValue>
                            </_.InfoRow>
                            <_.InfoRow>
                                <_.InfoLabel>링크</_.InfoLabel>
                                <_.InfoValue>
                                    <_.Link href="#">
                                        AMD 라이젠7 5세대 7800X3D
                                        라파엘 멀티팩 정품 국내정식 유통제품
                                    </_.Link>
                                </_.InfoValue>
                            </_.InfoRow>
                            <_.InfoRow>
                                <_.InfoLabel>사유</_.InfoLabel>
                                <_.InfoValue>
                                    가나다라마바사아자차타마바하고구마는맛있어서
                                    잘익은쑥이아기가 먹고싶어용
                                </_.InfoValue>
                            </_.InfoRow>
                            <_.InfoRow>
                                <_.InfoLabel>번호</_.InfoLabel>
                                <_.InfoValue>1</_.InfoValue>
                            </_.InfoRow>
                        </_.InfoArea>

                        <_.ButtonGroup>
                            <_.Yes onClick={handleApprove}>승인</_.Yes>
                            <_.No onClick={onClose}>거절</_.No>
                        </_.ButtonGroup>
                    </_.Modal>
                </_.Container>
            )}

            {showApprovalModal && (
                <ApprovalModal onClose={closeApprovalModal} />
            )}
        </>
    );
}