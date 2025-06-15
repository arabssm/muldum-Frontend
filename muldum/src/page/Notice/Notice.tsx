import { useState } from 'react';
import * as _ from './style';
import '../../App.css';
import data, { icons } from './data';
import Box from './Box';
import NavBar from '../../components/NavBar/NavBar';

export default function Notice() {
    const [search, setSearch] = useState('');

    const filtered = data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

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
                        onChange={e => setSearch(e.target.value)}
                    />
                </_.SearchBar>
                <img src={icons.Add} alt='Add' />
            </_.Wrapper>

            {filtered.map(item => (
                <Box
                    key={item.idx}
                    idx={item.idx}
                    title={item.title}
                    date={item.date}
                />
            ))}
        </_.Container>
    );
}
