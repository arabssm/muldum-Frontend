import { icons } from './icon';

export const IconMenu = [
    { label: '로그인', path: '', icon: icons.login, iconActive: icons.profile },
    { label: '홈 화면', path: '/', icon: icons.home, iconActive: icons.homeActive },
    { label: '역대 동아리', path: '', icon: icons.club, iconActive: icons.clubActive },
    { label: '공유 캘린더', path: '', icon: icons.date, iconActive: icons.dateActive },
    { label: '물품관리', path: '/project-choice', icon: icons.item, iconActive: icons.itemActive },
    { label: '월말평가', path: '', icon: icons.alarm, iconActive: icons.alarmActive },
    { label: '공지사항', path: '/notice', icon: icons.notice, iconActive: icons.noticeActive },
    { label: '팀스페이스', path: 'team-space', icon: icons.teamspace, iconActive: icons.teamspaceActive },
    { label: '설정', path: '', icon: icons.setting, iconActive: icons.settingActive },
];