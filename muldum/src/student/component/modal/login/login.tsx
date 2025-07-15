import { useSetRecoilState } from 'recoil';
import { loginModalState, whereismypasswordModalState } from '@_all/atom/Modal';
import { useState } from 'react';
import emailIcon from '@_assets/login/email.svg';
import passwordIcon from '@_assets/login/password.svg';
import Login from '@_api/notice/notice';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';

export default function LoginModal() {
  const navigate=useNavigate();
  const setModalOpen = useSetRecoilState(loginModalState);
  const setModalOpen1 = useSetRecoilState(whereismypasswordModalState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function Cake() {
    setModalOpen1(true);
    setModalOpen(false);
  }
  async function Check(e) {
    e.preventDefault();
    setModalOpen(false);
    console.log(24);
    const loginResponse = await Login();
    
    if (loginResponse) {
      navigate('/');
    } else {
      alert('이메일이나 비밀번호가 틀렸습니다.');
    }
  }
  
  return (
    <>
      <_.Overlay onClick={() => setModalOpen(false)} />
      <_.ModalContainer>
        <_.Title>로그인</_.Title>

        <_.InputWrapper>
          <_.IconImg src={emailIcon} alt="이메일 아이콘" />
          <_.StyledInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </_.InputWrapper>

        <_.InputWrapper>
          <_.IconImg src={passwordIcon} alt="비밀번호 아이콘" />
          <_.StyledInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </_.InputWrapper>

        <_.LoginButton onClick={Check}>
          로그인
        </_.LoginButton>

        <_.GoPassword>
          <_.PasswordLink onClick={Cake}>
            비밀번호 변경하러 가기
          </_.PasswordLink>
        </_.GoPassword>
      </_.ModalContainer>
    </>
  );
}