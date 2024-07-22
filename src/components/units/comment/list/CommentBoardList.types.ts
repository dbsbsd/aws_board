interface IComment {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

interface IBoarCommentsUIProps {
  comments: IComment[];
  loading: boolean;
  error: string;
  onDeleteComment: (commentId: string, password: string) => void;
  onUpdateComment: (commentId: string, nickname: string, password: string, content: string) => void;
}