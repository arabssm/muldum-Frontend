import * as _ from './style';
import { ContentCardProps } from './types';

export default function ContentCard({ title, onClick }: ContentCardProps) {
  return (
    <_.CardContainer onClick={onClick}>
      <_.Title>{title}</_.Title>
      <_.LinkText>바로가기 ＞</_.LinkText>
    </_.CardContainer>
  );
}