import { useState } from 'react';
import * as _ from './style';
import '../../App.css';
import data, { icons } from './data';
import Box from './Box';
import NavBar from '../../components/NavBar/NavBar';
import Pagination from './Pagination'

const ITEMS_PER_PAGE = 10;

export default function Notice() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const filtered = data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const startIdx = (page - 1) * ITEMS_PER_PAGE;
    const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

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
                    <img src={icons.Search} alt='Search' />
                    <_.SearchInput
                        type='text'
                        placeholder='공지사항 검색'
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />
                </_.SearchBar>
                <img src={icons.Add} alt='Add' />
            </_.Wrapper>

            {paginated.map(item => (
                <Box
                    key={item.idx}
                    idx={item.idx}
                    title={item.title}
                    date={item.date}
                />
            ))}

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </_.Container>
    );
}
