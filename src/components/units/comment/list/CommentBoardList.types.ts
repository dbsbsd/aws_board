export interface IComment {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

export interface IBoarCommentsUIProps {
  data: IComment[];
}
