import { useState } from 'react';
import { IconMenu } from './IconMenu';
import * as _ from './style';
import '../../App.css';

export default function NavBar() {
    const [activeMenu, setActiveMenu] = useState('');

    return (
        <_.Container>
        <_.MainArea>
            {IconMenu.map((item) => {
            const isActive = activeMenu === item.label;

            const TagComponent =
                item.label === '로그인'
                ? _.LoginTag
                : item.label === '설정'
                ? _.SettingTag
                : _.TagArea;

            return (
                <TagComponent
                key={item.label}
                onClick={() => setActiveMenu(item.label)}
                isActive={isActive} 
                >
                <_.Icon
                    src={isActive ? item.iconActive : item.icon}
                    alt={item.label}
                />
                <_.Text isActive={isActive}>{item.label}</_.Text>
                </TagComponent>
            );
            })}
        </_.MainArea>
        </_.Container>
    );
}
