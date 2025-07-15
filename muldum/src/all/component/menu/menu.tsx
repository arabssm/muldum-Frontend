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
      <_.Title>메뉴</_.Title>
      <_.Subtitle>원하는 항목을 선택하여 이동하세요</_.Subtitle>
      <_.GridContainer>
        {items.map(({ title, path }) => (
          <_.CardContainer key={title} onClick={() => handleClick(path)}>
            <_.CardTitle>{title}</_.CardTitle>
            <_.LinkText>바로가기 &gt;</_.LinkText>
          </_.CardContainer>
        ))}
      </_.GridContainer>
    </_.Wrapper>
  );
}
