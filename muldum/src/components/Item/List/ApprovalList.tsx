import * as _ from './style';
import NavBar from '@_components/NavBar/NavBar';
import data, { Props } from './data';

export default function ApprovalList({ selectAll }: Props) {
  return (
    <_.Container>
      <NavBar />
      <_.ListWrapper>
        {data.map((name, index) => (
          <_.ItemRow key={index}>
            <_.ItemIndex selected={selectAll}>
              {String(index + 1).padStart(2, '0')}
            </_.ItemIndex>
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