import { useEffect, useRef, useState } from 'react';
import CheckIcon from '@_assets/modal/check.svg';
import * as _ from '../style';
import '@_styles';

interface ConfirmDeleteModalProps {
onClose: () => void;
}

export default function ConfirmDeleteModal({ onClose }: ConfirmDeleteModalProps) {
const modalRef = useRef<HTMLDivElement>(null);
const [counts, setSecondsLeft] = useState(5);

useEffect(() => {
    if (counts <= 0) {
        onClose();
        return;
    }

    const timer = setTimeout(() => {
        setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
}, [counts, onClose]);

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, [onClose]);

return (
    <_.Container>
        <_.Modal ref={modalRef}>
            <_.CheckIcon src={CheckIcon} alt='CheckIcon' />
            <_.TextArea>
                <_.Title>수정되었습니다</_.Title>
                <_.SubTitle>다른 곳을 누르거나 5초 동안 기다리면<br />메인화면으로 이동합니다</_.SubTitle>
                <_.counts>{counts}</_.counts>
            </_.TextArea>
        </_.Modal>
    </_.Container>
);
}