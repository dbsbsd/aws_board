export interface IBoardDetailProps {
  content: string;
  createdAt: string;
  id: string;
  nickname: string;
  title: string;
  updatedAt: string;
  onClickDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}
