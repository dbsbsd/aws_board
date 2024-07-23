import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BoardCommentUI from "./CommentRegister.presenter";
import axios from "axios";
import { Modal, message } from "antd";

export default function BoardCommentRegister(props) {
  const urlApi = process.env.NEXT_PUBLIC_API_BASE_URL;
  const boardApi = process.env.NEXT_PUBLIC_BOARD;
  const commentApi = process.env.NEXT_PUBLIC_COMMENT;

  const router = useRouter();
  const boardId = router.query.boardId; // boardId를 쿼리에서 가져옵니다.

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (props.el) {
      setNickname(props.el.nickname);
      setContent(props.el.content);
    } else {
      setNickname("");
      setContent("");
    }
  }, [props.el]);

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const onClickSubmit = async () => {
    if (typeof boardId !== "string") return;

    if (!nickname || !password || !content) {
      message.error({ content: "모든 필드를 입력해주세요." });
      return;
    }

    try {
      await axios.post(`${urlApi}${boardApi}/${boardId}${commentApi}`, {
        nickname: nickname,
        password: password,
        content: content,
      });

      // 등록 후 state를 빈값으로 변경하여 댓글 작성창 비우기
      setNickname("");
      setPassword("");
      setContent("");
      message.success({ content: "댓글이 정상적으로 등록되었습니다." });
      props.fetchBoardComments();
    } catch (error) {
      console.error(error);
      Modal.error({
        content: "댓글 등록 중 오류가 발생했습니다.",
      });
    }
  };

  return (
    <>
      <BoardCommentUI
        isEdit={false} // 수정하기 기능이 없으므로 false로 설정
        el={props.el}
        onChangeNickname={onChangeNickname}
        onChangePassword={onChangePassword}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        nickname={nickname}
        password={password}
        content={content}
      />
    </>
  );
}
