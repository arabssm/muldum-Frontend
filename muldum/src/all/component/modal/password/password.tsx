import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { whereismypasswordModalState } from '../../../atom/Modal';
import styled from '@emotion/styled';

import emailIcon from '../../../assets/login/email.svg';
import passwordIcon from '../../../assets/login/password.svg';
import checkIcon from '../../../assets/login/check.svg';
import spendEmail, { spendCode } from '@_api/login/login';

export default function LoginModal() {
  const setModalOpen = useSetRecoilState(whereismypasswordModalState);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [vali, setVali] = useState(false);

  const handleCheckCode = async () => {
    try {
      const result = await spendCode(email, code);
      setVali(result); 
      if (!result) alert('인증번호가 올바르지 않습니다.');
    } catch (e) {
      alert('인증 오류가 발생했습니다.');
    }
  };

  const handlePasswordChange = () => {
    if (!vali) {
      alert('인증이 필요합니다.');
      return;
    }
    alert('비밀번호가 변경되었습니다.');
    setModalOpen(false);
  };

  return (
    <>
      <Overlay onClick={() => setModalOpen(false)} />
      <ModalContainer>
        <Title>비밀번호 변경</Title>

        <InputWrapper>
          <IconImg src={emailIcon} alt="이메일 아이콘" />
          <StyledInput
            type="email"
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <SideButton onClick={() => spendEmail(email)}>이메일 전송</SideButton>
        </InputWrapper>

        <InputWrapper>
          <IconImg src={checkIcon} alt="인증 아이콘" />
          <StyledInput
            type="text"
            onChange={(e) => setCode(e.target.value)}
            placeholder="인증번호 입력"
          />
          <SideButton onClick={handleCheckCode}>번호 인증</SideButton>
        </InputWrapper>

        <InputWrapper>
          <IconImg src={passwordIcon} alt="비밀번호 아이콘" />
          <StyledInput
            type="password"
            placeholder={vali ? "새 비밀번호" : "번호 인증 먼저 진행해주세요"}
            disabled={!vali}
          />
        </InputWrapper>

        <InputWrapper>
          <IconImg src={passwordIcon} alt="비밀번호 확인 아이콘" />
          <StyledInput
            type="password"
            placeholder={vali ? "비밀번호 확인" : "번호 인증 먼저 진행해주세요"}
            disabled={!vali}
          />
        </InputWrapper>


        <LoginButton onClick={handlePasswordChange}>
          비밀번호 변경
        </LoginButton>
      </ModalContainer>
    </>
  );
}


const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;               
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 24px;        
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;
const InputWrapper1 = styled.div`
  position: relative;
  width: 70%;
  margin-bottom: 16px;
`;

const IconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.6;
`;
const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;       
  height: 48px;
  padding: 0 12px 0 44px;      
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
  font-size: 15px;
  color: #333333;
  outline: none;

  &::placeholder {
    color: #9e9e9e;
    font-size: 15px;
  }

  &:focus {
    background-color: #e8e8e8;
  }
`;
const SideButton = styled.button`
  margin-left: 8px;
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  background-color: #f2a161;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #e59450;
  }
`;
const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  background-color: #f2a161;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #e59450;
  }
  &:active {
    background-color: #d88440;
  }
`;
