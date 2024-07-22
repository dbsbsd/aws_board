import { Modal } from "antd";
import { useState } from "react";
import * as S from "./CommentBoardListStyles";
import { getDate } from "../../../../commons/utils/date";

export default function CommentBoardListItems(props) {
  const { comments, onDeleteComment, onUpdateComment } = props;
  
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const onClickDeleteComment = async () => {
    await onDeleteComment(myBoardCommentId, myPassword);
    setIsOpenDeleteModal(false);
    setMyPassword("");
  };

  const handleUpdateClick = async (commentId: string) => {
    onUpdateComment(commentId, password, content);
    setIsEdit(false);
  };

  return (
    <>
      <S.Wrapper>
        {comments.map((comment) => (
          <S.Wrapper key={comment.id}>
            {isEdit === comment.id ? (
              // 수정 모드일 때
              <>
                <S.InputWrapper>
                  <S.Input
                    onChange={(e) => setNickname(e.target.value)}
                    type="text"
                    placeholder="작성자"
                    value={nickname}
                    readOnly={true}
                  />
                  <S.Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                  />
                </S.InputWrapper>
                <S.ContentsWrapper>
                  <S.Contents
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={100}
                    value={content}
                  />
                </S.ContentsWrapper>
                <S.BottomWrapper>
                  <S.ContentsLength>
                    {content.length}/100
                  </S.ContentsLength>
                  <S.Button onClick={() => handleUpdateClick(comment.id)}>
                    수정하기
                  </S.Button>
                </S.BottomWrapper>
              </>
            ) : (
              // 댓글 표시 모드일 때
              <S.CommentBox>
                <S.Avatar src="/BoardComment/avatar.png" />
                <S.MainWrapper>
                  <S.WriterWrapper>
                    <S.Writer>{comment.nickname}</S.Writer>
                  </S.WriterWrapper>
                  <S.ContentsBox>{comment.content}</S.ContentsBox>
                </S.MainWrapper>
                <S.IconBox>
                  <S.UpdateIcon
                    onClick={() => {
                      setIsEdit(comment.id); // 수정 모드로 전환
                      setNickname(comment.nickname);
                      setPassword(""); // 비밀번호 초기화
                      setContent(comment.content);
                    }}
                    src="/BoardComment/option_update_icon.png"
                  />
                  <S.DeleteIcon
                    onClick={() => {
                      setMyBoardCommentId(comment.id);
                      setIsOpenDeleteModal(true);
                    }}
                    src="/BoardComment/option_delete_icon.png"
                  />
                </S.IconBox>
              </S.CommentBox>
            )}
            <S.DateBox>{getDate(comment.createdAt)}</S.DateBox>
          </S.Wrapper>
        ))}
      </S.Wrapper>

      <Modal
        open={isOpenDeleteModal}
        onOk={onClickDeleteComment}
        onCancel={() => setIsOpenDeleteModal(false)}
      >
        <S.PwdInput
          type="password"
          placeholder="비밀번호를 입력하시면 댓글이 삭제됩니다."
          onChange={(e) => setMyPassword(e.target.value)}
          value={myPassword}
        />
      </Modal>
    </>
  );
}
