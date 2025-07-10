import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as _ from './style';
import '@_styles';
import { icons } from './data';
import Box from './Box';
import NavBar from 'src/admin/components/NavBar/NavBar';
import Pagination from './Pagination';
import { NoticeItem } from './type';

export default function Notice() {
    const [notices, setNotices] = useState<NoticeItem[]>([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    

    useEffect(() => {
        const saved = localStorage.getItem('notices');
        if (saved) {
        setNotices(JSON.parse(saved));
        }
    }, []);

    const filtered = notices.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / 10);
    const startIdx = (page - 1) * 10;
    const paginated = filtered.slice(startIdx, startIdx + 10);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage);
        }
    };

    return (
        <_.Container>
        <NavBar />
        <_.Wrapper>
            <_.PageTitle>공지사항</_.PageTitle>
            <_.SearchBar>
            <img src={icons.Search} alt="Search" />
            <_.SearchInput
                type="text"
                placeholder="공지사항 검색"
                value={search}
                onChange={e => {
                setSearch(e.target.value);
                setPage(1);
                }}
            />
            </_.SearchBar>
            <_.Add
            src={icons.Add}
            alt="Add"
            onClick={() => navigate('/create-notice')}
            />
        </_.Wrapper>
        {paginated.map(item => (
            <Box key={item.idx} idx={item.idx} title={item.title} date={item.date} />
        ))}
        <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
        </_.Container>
    );
}