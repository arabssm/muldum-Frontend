export interface Props {
    rejectReason: string;
    setRejectReason: (reason: string) => void;
}

export interface FilterProps {
    filter: '가능' | '불가능';
    setFilter: (type: '가능' | '불가능') => void;
}

export interface ClubSelectorProps {
    clubs: string[];
    selectedClub: string | null;
    setSelectedClub: (club: string | null) => void;
}