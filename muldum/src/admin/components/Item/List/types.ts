export interface Props {
    selectAll: boolean;
    selectedItems: number[];
    setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}