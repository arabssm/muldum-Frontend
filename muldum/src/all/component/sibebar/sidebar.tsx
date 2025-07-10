import { useNavigate, useLocation } from "react-router-dom";
import { IconMenu } from "./IconMenu";
import * as _ from "./style";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "@_all/atom/Modal";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const setModalOpen = useSetRecoilState(loginModalState);
    return (
        <_.MainArea>
        {IconMenu.map((item) => {
            const isActive = location.pathname === item.path;

            const TagComponent =
            item.label === "로그인"
                ? _.LoginTag
                : item.label === "설정"
                ? _.SettingTag
                : _.TagArea;

            return (
            <TagComponent
                key={item.label}
                onClick={() => {
                if (item.label === "로그인") {
                    setModalOpen(true);
                } else {
                    navigate(item.path);
                }
                }}
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
    );
}