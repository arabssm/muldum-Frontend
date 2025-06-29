import { useState } from 'react';
import * as _ from './style';
import NavBar from '@_navbar/NavBar';
import '@_styles';
import ApprovalList from '@_components/Item/List/ApprovalList';
import CLUBS from './ClubList';

export default function Approval() {
    const [filter, setFilter] = useState<'가능' | '불가능'>('가능');
    const [selectedClub, setSelectedClub] = useState<string | null>(null);
    const [rejectReason, setRejectReason] = useState<string>('구입처를 잘못 입력한 물품');

    const handleFilter = (type: '가능' | '불가능') => {
        setFilter(type);
        setSelectedClub(null);
    };

    const handleSelectClub = (club: string) => {
        setSelectedClub(club === selectedClub ? null : club);
    };

    const filteredClubs = CLUBS;

    return (
        <_.Container>
            <NavBar />
            <_.Title>전공동아리 물품 승인</_.Title>
            <_.Subtitle>학생들이 신청한 물품들을 확인해요</_.Subtitle>

            <_.ButtonArea>
                <_.ApprovalButton onClick={() => handleFilter('가능')} active={filter === '가능'}>
                    승인 가능
                </_.ApprovalButton>
                <_.ApprovalButton onClick={() => handleFilter('불가능')} active={filter === '불가능'}>
                    승인 불가능
                </_.ApprovalButton>
            </_.ButtonArea>

            {filter === '가능' ? (
                <>
                    <_.ClubArea>
                        {filteredClubs.map((club, i) => (
                            <_.ClubName
                                key={i}
                                onClick={() => handleSelectClub(club)}
                                selected={selectedClub === club}
                            >
                                {club}
                            </_.ClubName>
                        ))}
                    </_.ClubArea>

                    <_.AddonsArea>
                        <_.Addons>다운로드</_.Addons>
                        <_.Addons>전체선택</_.Addons>
                    </_.AddonsArea>

                    {selectedClub ? (
                        <ApprovalList />
                    ) : (
                        <_.Null>물품승인을 할 동아리를 선택해주세요</_.Null>
                    )}
                </>
            ) : (
                <>
                    <_.RejectReasonArea>
                        <_.RejectButton 
                            active={rejectReason === '구입처를 잘못 입력한 물품'}
                            onClick={() => setRejectReason('구입처를 잘못 입력한 물품')}
                        >
                            구입처를 잘못 입력한 물품
                        </_.RejectButton>
                        <_.RejectButton 
                            active={rejectReason === '구매 사유가 적절하지 않은 물품'}
                            onClick={() => setRejectReason('구매 사유가 적절하지 않은 물품')}
                        >
                            구매 사유가 적절하지 않은 물품
                        </_.RejectButton>
                        <_.RejectButton 
                            active={rejectReason === '가격이 과도하게 많이 나가는 물품'}
                            onClick={() => setRejectReason('가격이 과도하게 많이 나가는 물품')}
                        >
                            가격이 과도하게 많이 나가는 물품
                        </_.RejectButton>
                        <_.RejectButton 
                            active={rejectReason === '기타사유'}
                            onClick={() => setRejectReason('기타사유')}
                        >
                            기타사유
                        </_.RejectButton>
                    </_.RejectReasonArea>

                    <_.AddonsArea>
                        <_.Addons>다운로드</_.Addons>
                        <_.Addons>전체선택</_.Addons>
                    </_.AddonsArea>
                    <ApprovalList />
                </>
            )}

            <_.ButtonGroup>
                <_.ApplyButton>승인하기</_.ApplyButton>
                <_.ApplyNobutton>거절하기</_.ApplyNobutton>
            </_.ButtonGroup>
        </_.Container>
    );
}