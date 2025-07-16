import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import "@_styles";
import NavBar from "@_all/component/sibebar/sidebar";
import ApprovalList from "@_components/Item/List/ApprovalList";
import Clubs from "./ClubList";
import { submititem,nosubmititem } from "@_api/object/apply";
import ClubSelector from "@_components/Item/List/ClubSelector";
import RejectModal from "@_modal/Approval/Rejectmodal";
import ApprovalModal from "@_modal/Approval/ApprovalModal";
import ReasonButtons from "./Reason";

const Approval = () => {
  const [filter, setFilter] = useState<"가능" | "불가능">("가능");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [allItemIds, setAllItemIds] = useState<number[]>([]);
  const [reasons, setReasons] = useState<{ [id: number]: string }>({});

  const [selectedPossibleClub, setSelectedPossibleClub] = useState<
    string | null
  >(null);
  const [selectedImpossibleClub, setSelectedImpossibleClub] = useState<
    string | null
  >(null);
  const [selectAll, setSelectAll] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const navigate = useNavigate();
  function SSubmit() {
    if (!selectedItems || selectedItems.length === 0) {
      alert("선택된 항목이 없습니다.");
      return;
    }

    submititem(selectedItems);
    setShowApproveModal(true);
    window.location.reload();
  }
  function NSubmit() {
    if (!selectedItems || selectedItems.length === 0) {
      alert("선택된 항목이 없습니다.");
      return;
    }
  
    const selectedReasons = selectedItems.map(id => reasons[id] || "");
  
    nosubmititem({
      itemIds: selectedItems,
      reasons: selectedReasons,
    });
  
    setShowRejectModal(true);
  }
  
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allItemIds);
    }
    setSelectAll(!selectAll);
  };

  const closeModal = (isApprove: boolean) => {
    if (isApprove) {
      setShowApproveModal(false);
    } else {
      setShowRejectModal(false);
    }
    navigate("/project-choice");
  };

  const renderContent = () => {
    const isPossible = filter === "가능";
    const selectedClub = isPossible
      ? selectedPossibleClub
      : selectedImpossibleClub;
    const setSelectedClub = isPossible
      ? setSelectedPossibleClub
      : setSelectedImpossibleClub;

    return (
      <>
        {isPossible ? (
          <>
            <ClubSelector
              clubs={Clubs.map((c) => c.name)}
              selectedClub={selectedClub}
              setSelectedClub={setSelectedClub}
            />
            <_.AddonsArea>
              <_.Addons onClick={toggleSelectAll}>
                {selectAll ? "전체해제" : "전체선택"}
              </_.Addons>
              <_.Addons>다운로드</_.Addons>
            </_.AddonsArea>

            {selectedClub ? (
  <ApprovalList
    id={Clubs.find((c) => c.name === selectedClub)?.id}
    selectAll={selectAll}
    selectedItems={selectedItems}
    setSelectedItems={setSelectedItems}
    setAllItemIds={setAllItemIds}
    reasons={reasons}
    setReasons={setReasons}
  />
) : (
  <_.Null>물품승인을 할 동아리를 선택해주세요</_.Null>
)}

          </>
        ) : (
          <>
            <ReasonButtons />
            <_.AddonsArea>
              <_.Addons onClick={toggleSelectAll}>
                {selectAll ? "전체해제" : "전체선택"}
              </_.Addons>
            </_.AddonsArea>

            <ApprovalList
              selectAll={selectAll}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              setAllItemIds={setAllItemIds}
            />
          </>
        )}
      </>
    );
  };

  return (
    <_.Container>
      <NavBar />
      <_.Title>전공동아리 물품 승인</_.Title>
      <_.Subtitle>학생들이 신청한 물품들을 확인해요</_.Subtitle>
      <_.ButtonArea>
        <_.ApprovalButton
          onClick={() => setFilter("가능")}
          active={filter === "가능"}
        >
          승인 가능
        </_.ApprovalButton>
        <_.ApprovalButton
          onClick={() => setFilter("불가능")}
          active={filter === "불가능"}
        >
          승인 불가능
        </_.ApprovalButton>
      </_.ButtonArea>
      {renderContent()}
      <_.ButtonGroup>
        <_.ApplyButton
            onClick={() => SSubmit()}
          disabled={selectedItems.length === 0}
        >
          승인하기
        </_.ApplyButton>
        <_.ApplyNobutton
          onClick={() => NSubmit()}
          disabled={selectedItems.length === 0}
        >
          거절하기
        </_.ApplyNobutton>
      </_.ButtonGroup>
      {showApproveModal && <ApprovalModal onClose={() => closeModal(true)} />}
      {showRejectModal && <RejectModal onClose={() => closeModal(false)} />}
    </_.Container>
  );
};

export default Approval;
