import { Modal } from "antd";
import {
  IBoarCommentsUIProps
} from "./CommentBoardList.types";
import * as S from "./CommentBoardListStyles";
import BoardCommentRegister from "../register/CommentRegister.container";
import { useState } from "react";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/utils/date";

export default function CommentBoardListItems(props: IBoarCommentsUIProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const onClickDeleteComment = async () => {
    try {
      await props.onDeleteComment(myBoardCommentId, myPassword);
      onToggleModal();
    } catch (error) {
      if (error instanceof Error)
        Modal.warning({
          content: (
            <div>
              <p>비밀번호가 일치하지 않습니다.</p>
              <p>다시 입력해주세요.</p>
            </div>
          ),
        });
    }
  };

  const onClickDeleteCommentModal = (event: React.MouseEvent<HTMLImageElement>) => {
    setMyBoardCommentId(event.currentTarget.id);
    onToggleModal();
  };

  const onChangeDeletePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onToggleModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onClickUpdateComment = () => {
    setIsEdit(true);
  };

  const onCancelUpdate = () => {
    setIsEdit(false);
  };

  const onSubmitUpdate = (updatedComment: IBoardComment) => {
    props.onUpdateComment(props.el._id, updatedComment);
    setIsEdit(false);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          open={isOpenDeleteModal}
          onOk={onClickDeleteComment}
          onCancel={onToggleModal}
        >
          <S.PwdInput
            type="password"
            placeholder="비밀번호를 입력하시면 댓글이 삭제됩니다."
            onChange={onChangeDeletePassword}
          />
        </Modal>
      )}

      {props.data.map((board, index) => (
      <S.Wrapper key={board.id}>
        {!isEdit && (
          <>
            <S.CommentBox>
              <S.Avatar src="/BoardComment/avatar.png/" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{board.nickname}</S.Writer>
                </S.WriterWrapper>
                <S.ContentsBox>{board.content}</S.ContentsBox>
              </S.MainWrapper>
              <S.IconBox>
                <S.UpdateIcon
                  onClick={onClickUpdateComment}
                  src="/BoardComment/option_update_icon.png/"
                />
                <S.DeleteIcon
                  id={board.id}
                  onClick={onClickDeleteCommentModal}
                  src="/BoardComment/option_delete_icon.png"
                />
              </S.IconBox>
            </S.CommentBox>
            <S.DateBox>{getDate(board.createdAt)}</S.DateBox>
          </>
        )}
        {isEdit && (
          <BoardCommentRegister
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            onCancelUpdate={onCancelUpdate}
            onSubmitUpdate={onSubmitUpdate}
          />
        )}
      </S.Wrapper>
    ))}
    </>
  );
}
