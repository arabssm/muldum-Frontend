import { icons } from './icons';

export const IconMenu = [
    { label: '로그인', path: '', icon: icons.Gologin, iconActive: icons.profile },
    { label: '홈 화면', path: '/', icon: icons.home, iconActive: icons.Chome },
    { label: '역대 동아리', path: '', icon: icons.ranking, iconActive: icons.Cranking },
    { label: '공유 캘린더', path: '', icon: icons.calender, iconActive: icons.Ccalender },
    { label: '물품 관리', path: '/object', icon: icons.object, iconActive: icons.Cobject },
    { label: '월말평가', path: '', icon: icons.check, iconActive: icons.Ccheck },
    { label: '공지사항', path: '/notice', icon: icons.alerticon, iconActive: icons.Calerticon },
    { label: '설정', path: '', icon: icons.setting, iconActive: icons.setting }
];