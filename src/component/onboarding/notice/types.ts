export interface HeaderProps {
    value: string;
    onChange: (v: string) => void;
}

export interface NoticeItem {
    id: number;
    title: string;
    created_at: string;
    teacher: string;
}

export interface BoxProps {
    idx: number;
    title: string;
    date: string;
}
