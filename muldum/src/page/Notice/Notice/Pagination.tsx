import { PaginationWrapper, PageButton } from './style';
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <PaginationWrapper>
            <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                ＜
            </PageButton>
            {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    active={currentPage === i + 1}
                >
                    {i + 1}
                </PageButton>
            ))}
            <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                ＞
            </PageButton>
        </PaginationWrapper>
    );
}