import axiosInstance from "../lib/axiosInatanse";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {

    if (code) {
      axiosInstance.post('/api/oauth/login', {
        clientId: import.meta.env.VITE_BSM_CLIENT_ID,
        clientSecret: import.meta.env.VITE_BSM_CLIENT_SECRET,
        authCode: code,
      })
      .then(res => {
        const token = res.headers.authorization;
        localStorage.setItem('accessToken', token);
        navigate('/');
      })
      .catch(err => {
        console.error('OAuth 로그인 실패:', err);
        alert('로그인에 실패했습니다.');
      });
    }
  }, [navigate]);
}
