import { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentRegisterUIProps {
  isEdit: false; // 수정하기 기능이 없으므로 항상 false
  el?: IBoardComment;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  nickname: string;
  password: string;
  content: string;
}

export interface IBoardCommentRegisterProps {
  el?: IBoardComment;
  isEdit: false; // 수정하기 기능이 없으므로 항상 false
}
