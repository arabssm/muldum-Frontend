import { useEffect } from 'react';
import * as _ from './style';
import NavBar from '@_all/component/sibebar/sidebar';
import data from './data';
import type { Props } from './types';

export default function ApprovalList({
  selectedItems,
  setSelectedItems,
  setAllItemIds,
}: Props & { setAllItemIds: (ids: number[]) => void }) {
  const handleSelect = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  useEffect(() => {
    const ids = data.map((_, index) => index);
    setAllItemIds(ids);
  }, [setAllItemIds]);

  return (
    <_.Container>
      <NavBar />
      <_.ListWrapper>
        {data.map((name, index) => (
          <_.ItemRow
            key={index}
            onClick={() => handleSelect(index)}
          >
            <_.ItemIndex selected={selectedItems.includes(index)}>
              {String(index + 1).padStart(2, '0')}
            </_.ItemIndex>
            <_.ItemName href="https://github.com/123isi" target="_blank">
              {name}
            </_.ItemName>
            <_.ItemInput placeholder="사유를 적기" />
          </_.ItemRow>
        ))}
      </_.ListWrapper>
    </_.Container>
  );
}