import ContentCard from "./contentbox";
import { items } from "./items";
import * as _ from './style';
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <_.Wrapper>
      <_.H1>메뉴</_.H1>
      <_.H2>원하는 항목을 선택하여 이동하세요</_.H2>
      <_.GridContainer>
        {items.map(({ title, path }) => (
          <ContentCard
            key={title}
            title={title}
            onClick={() => handleClick(path)}
          />
        ))}
      </_.GridContainer>
    </_.Wrapper>
  );
}