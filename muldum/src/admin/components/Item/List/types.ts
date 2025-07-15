export interface Props {
    selectAll: boolean;
    selectedItems: number[];
    id: number;
    setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}