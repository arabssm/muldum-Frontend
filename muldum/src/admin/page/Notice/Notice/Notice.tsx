import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as _ from './style';
import '@_styles';
import Search from '../../../../all/assets/onboarding/search.svg';
import Add from '../../../../all/assets/add.svg'
import Box from './Box';
import NavBar from '../../../../all/component/sibebar/sidebar';
import Pagination from './Pagination';
import { NoticeItem } from './type';
import {getNotice} from '../../../../api/notice/notice';
export default function Notice() {
    const [notices, setNotices] = useState<NoticeItem[]>([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    

  const [posts, setPosts] = useState([]);
  const [totalPages,setTotalpages]=useState(1);
  useEffect(() => {
    getNotice(page)
      .then((data) => {
        setPosts(data?.content ?? []);
        setTotalpages(data.totalPages);
        console.log(data);
      })
      .catch((err) => {
        console.log("게시물을 불러오는 데 실패했습니다.", err);
      });
  }, []);

  const filtered = posts.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  
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
            <img src={Search} alt="Search" />
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
            src={Add}
            alt="Add"
            onClick={() => navigate('/create-notice')}
            />
        </_.Wrapper>
        {filtered.map(notice => (
            <Box
            key={notice.id}
            idx={notice.id}
            title={notice.title}
            date={notice.createdAt} 
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