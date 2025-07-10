import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../lib/axiosInatanse';

export default function LoginRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      alert("인증 코드가 없습니다.");
      return;
    }

    axiosInstance.post('/api/oauth/login', {
      clientId: import.meta.env.VITE_BSM_CLIENT_ID,
      clientSecret: import.meta.env.VITE_BSM_CLIENT_SECRET,
      authCode: code,
    })
    .then((res) => {
      const token = res.headers.authorization;
      localStorage.setItem('accessToken', token);
      navigate('/');
    })
    .catch((err) => {
      console.error(err);
      alert("로그인에 실패했습니다.");
    });
  }, [navigate]);

  return <p>로그인 중입니다...</p>;
}
