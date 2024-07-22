export interface IBoard {
  id: string;
  title: string;
  nickname: string;
  createdAt: string;
}

export interface IBoardsUIProps {
  data: IBoard[];
  onClickMoveToRegisterPage: () => void;
  onClickMoveToDetailPage: (id: string) => void;
}