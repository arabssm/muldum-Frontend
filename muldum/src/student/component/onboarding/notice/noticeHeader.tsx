import Searchicon from '@_assets/onboarding/search.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderProps } from './types';
import * as _ from './style';

export default function Header11({ value, onChange }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const showViewAll = location.pathname === '/';

  return (
    <_.Header>
      <_.Title>공지사항</_.Title>
      <_.SearchWrapper>
        <_.SearchIcon src={Searchicon} alt="검색 아이콘" />
        <_.SearchInput
          placeholder="공지사항 검색"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {showViewAll && (
          <_.ViewAll onClick={() => navigate('/notice')}>
            전체보기
          </_.ViewAll>
        )}
      </_.SearchWrapper>
    </_.Header>
  );
}
