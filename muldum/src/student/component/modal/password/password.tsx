
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { whereismypasswordModalState } from '@_all/atom/Modal';
import * as _ from '../login/style';
import emailIcon from '@_assets/login/email.svg';
import passwordIcon from '@_assets/login/password.svg';
import checkIcon from '@_assets/login/check.svg';


export default function LoginModal() {
  const setModalOpen = useSetRecoilState(whereismypasswordModalState);
  const [step, setStep] = useState<number>(1);
  function Change(){
    setStep(2);
  }
  return (
    <>
    {step === 1 && (
  <>
    <_.Overlay onClick={() => setModalOpen(false)} />
    <_.ModalContainer>
      <_.Title>비밀번호 변경</_.Title>

      <_.InputWrapper>
        <_.IconImg src={emailIcon} alt="이메일 아이콘" />
        <_.StyledInput
          type="email"
          placeholder="이메일"
          autoFocus
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={checkIcon} alt="인증 아이콘" />
        <_.StyledInput
          type="text"
          placeholder="인증번호 입력"
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={passwordIcon} alt="비밀번호 아이콘" />
        <_.StyledInput
          type="password"
          placeholder="새 비밀번호"
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={passwordIcon} alt="비밀번호 확인 아이콘" />
        <_.StyledInput
          type="password"
          placeholder="비밀번호 확인"
        />
      </_.InputWrapper>

      <_.LoginButton onClick={Change}>
        비밀번호 변경
      </_.LoginButton>
    </_.ModalContainer>
  </>
)}
{step === 2 && (
  <>
    <_.Overlay onClick={() => setModalOpen(false)} />
    <_.ModalContainer>
      <_.Title>비밀번호 변경</_.Title>

      <_.InputWrapper>
        <_.IconImg src={emailIcon} alt="이메일 아이콘" />
        <_.StyledInput
          type="email"
          placeholder="이메일"
          autoFocus
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={checkIcon} alt="인증 아이콘" />
        <_.StyledInput
          type="text"
          placeholder="인증번호 입력"
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={passwordIcon} alt="비밀번호 아이콘" />
        <_.StyledInput
          type="password"
          placeholder="새 비밀번호"
        />
      </_.InputWrapper>

      <_.InputWrapper>
        <_.IconImg src={passwordIcon} alt="비밀번호 확인 아이콘" />
        <_.StyledInput
          type="password"
          placeholder="비밀번호 확인"
        />
      </_.InputWrapper>

      <_.LoginButton onClick={Change}>
        비밀번호 변경
      </_.LoginButton>
    </_.ModalContainer>
  </>
)}

    </>
  );
}