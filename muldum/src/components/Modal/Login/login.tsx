import { useState } from 'react';
import * as _ from './style';
import '@_styles';
import mail from '@_assets/modal/mail.svg';
import password from '@_assets/modal/password.svg';
import type { LoginModalProps } from './types';

export default function LoginModal({ onClose }: LoginModalProps) {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const handleLogin = () => {
        if (email && pw) {
            alert('환영합니다! 로그인에 성공했습니다.');
            onClose();
        } else {
            alert('이메일과 비밀번호를 입력해주세요');
        }
    };

    return (
        <_.Overlay>
            <_.Container>
                <_.Title>로그인</_.Title>

                <_.InputWrap>
                    <img src={mail} alt="mail" />
                    <input
                        type="email"
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </_.InputWrap>

                <_.InputWrap>
                    <img src={password} alt="password" />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                </_.InputWrap>

                <_.LoginButton onClick={handleLogin}>로그인</_.LoginButton>
                <_.CloseButton onClick={onClose}>닫기</_.CloseButton>
            </_.Container>
        </_.Overlay>
    );
}