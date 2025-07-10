import Header11 from './noticeHeader';
import Box from './box';
import * as _ from './style';
import { useEffect,useState } from 'react';
import getNotice from '../../../../api/notice'
export default function Notice() {
  const [search, setSearch] = useState('');
  
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getNotice()
      .then((data) => {
        setPosts(data?.content || []);
        console.log(data);
      })
      .catch((err) => {
        console.log("게시물을 불러오는 데 실패했습니다.", err);
      });
  }, []);
const filtered = posts.filter(n =>
  n.title.includes(search)
);
  return (
    <>
      <Header11 value={search} onChange={setSearch} />
      <_.BoxContainer>
        {filtered.map(notice => (
          <Box
            key={notice.id}
            idx={notice.id}
            title={notice.title}
            date={notice.created_at}
          />
        ))}
      </_.BoxContainer>
    </>
  );
}
