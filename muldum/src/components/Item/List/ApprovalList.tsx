import * as _ from './style';
import NavBar from '@_components/NavBar/NavBar';

const data = [
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
  'AMD 라이젠7 5세대 7800X3D 라파엘 멀티팩 정품 국내정식 유통제품',
];

export default function ApprovalList() {
  return (
    <_.Container>
      <NavBar />
      <_.ListWrapper>
        {data.map((name, index) => (
          <_.ItemRow key={index}>
            <_.ItemIndex>{String(index + 1).padStart(2, '0')}</_.ItemIndex>
            <_.ItemName href="https://github.com/dpqlsn" target="_blank">
              {name}
            </_.ItemName>
            <_.ItemInput placeholder="사유를 적기" />
          </_.ItemRow>
        ))}
      </_.ListWrapper>
    </_.Container>
  );
}