export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface NoticeItem {
    idx: number;
    title: string;
    date: string;
}

export interface BoxProps {
    idx: number;
    title: string;
    date: string;
}