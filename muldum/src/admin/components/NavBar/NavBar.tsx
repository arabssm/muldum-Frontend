import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getIconMenu } from './IconMenu'; 
import LoginModal from 'src/admin/components/Modal/Login/login';
import * as _ from './style';
import '@_styles';

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleTagClick = (item) => {
        if (item.label === '로그인') {
            setShowLoginModal(true);
        } else if (item.label === '마이페이지') {
            navigate('/mypage');
        } else {
            navigate(item.path);
        }
    };

    const renderTagComponent = (item, isActive) => {
        const TagComponent =
            item.label === '로그인' || item.label === '마이페이지' ? _.LoginTag :
            item.label === '설정' ? _.SettingTag :
            _.TagArea;

        return (
            <TagComponent key={item.label} onClick={() => handleTagClick(item)} isActive={isActive}>
                <_.Icon src={isActive ? item.iconActive : item.icon} alt={item.label} />
                <_.Text isActive={isActive}>{item.label}</_.Text>
            </TagComponent>
        );
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLoginModal(false);
    };

    const iconMenu = getIconMenu(isLoggedIn);

    return (
        <>
            <_.MainArea>
                {iconMenu.map((item) => {
                    const isActive = location.pathname === item.path;
                    return renderTagComponent(item, isActive);
                })}
            </_.MainArea>

            {showLoginModal && (
                <LoginModal
                    onClose={() => setShowLoginModal(false)}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
        </>
    );
}