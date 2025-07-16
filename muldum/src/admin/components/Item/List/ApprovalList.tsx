import { useState, useEffect } from 'react';
import * as _ from './style';
import NavBar from '@_all/component/sibebar/sidebar';
import type { Props } from './types';
import {tchitem} from '../../../../api/object/apply';
import DetailItem from '@_components/Modal/Delete/DeleteModal';

export default function ApprovalList({
  id,
  selectedItems,
  setSelectedItems,
  setAllItemIds,
  reasons,
  setReasons,
}: Props & { setAllItemIds: (ids: number[]) => void, reasons: any, setReasons: any }) {
  const [data, setData] = useState<any[]>([]);  
  const handleReasonChange = (id: number, value: string) => {
    setReasons(prev => ({ ...prev, [id]: value }));
  };
  const handleSelect = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  useEffect(() => {
    tchitem(id)
      .then((res) => {
        setData(res); 
        setAllItemIds(res.map((item: any) => item.id));
      })
      .catch((err) => {
        console.error('API 실패', err);
      });
  }, [id, setAllItemIds]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedName, setSelectedName] = useState('');

  const handleItemClick = (name: string) => {
    setSelectedName(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedName('');
  };

  return (
    <_.Container>
      <NavBar />
      <_.ListWrapper>
      {data.map((item, index) => (
          <_.ItemRow
            key={item.id}
            onClick={() => handleSelect(item.id)}
          >
            <_.ItemIndex selected={selectedItems.includes(item.id)}>
              {String(index + 1).padStart(2, '0')}
            </_.ItemIndex>
            <_.ItemName href={item.productLink} target="_blank">
              {item.productName}
            </_.ItemName>
            <_.ItemInput
  placeholder={item.reason}
  value={reasons[item.id] || ''}
  onChange={(e) => handleReasonChange(item.id, e.target.value)}
/>

          </_.ItemRow>
        ))}
      </_.ListWrapper>
        {modalOpen && (
        <DetailItem name={selectedName} onClose={closeModal} />
      )}
    </_.Container>
  );
}