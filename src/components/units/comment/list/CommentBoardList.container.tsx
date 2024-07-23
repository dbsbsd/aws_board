import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CommentBoardListItems from "./CommentBoardListItems";
import BoardCommentRegister from "../register/CommentRegister.container";
import { message } from "antd"

export default function BoardCommentList({ boardId }: { boardId: string }) {
  const urlApi = process.env.NEXT_PUBLIC_API_BASE_URL;
  const boardApi = process.env.NEXT_PUBLIC_BOARD;
  const commentApi = process.env.NEXT_PUBLIC_COMMENT;

  const router = useRouter();
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    fetchBoardComments();
  }, [boardId]);

  const fetchBoardComments = async () => {
    try {
      const response = await axios.get(`${urlApi}${boardApi}/${boardId}${commentApi}`);
      setComments(response.data); // 배열로 들어오는 댓글 데이터
    } catch (error) {
      console.error("Error fetching board comments:", error);
    }
  };

  const onDeleteComment = async (commentId: string, password: string) => {
    try {
      await axios.post(`${urlApi}${boardApi}/${boardId}${commentApi}/${commentId}`, {
        password: password,
      });
      fetchBoardComments();
      message.success({ content: "댓글이 정상적으로 삭제되었습니다." });
    } catch (error) {
      message.error({ content: "비밀번호가 틀립니다." });
    }
  }

  const onUpdateComment = async (commentId: string, password: string, content: string) => {
    
    try {
      await axios.patch(`${urlApi}${boardApi}/${boardId}${commentApi}/${commentId}`, {
        password: password,
        content: content,
      });
      message.success({ content: "댓글이 정상적으로 수정되었습니다." });
      fetchBoardComments();
    } catch (error) {
      message.error({ content: "비밀번호가 틀립니다." });
    }
  }
  

  return (
    <>
      <BoardCommentRegister
        boardId={boardId}
        fetchBoardComments={fetchBoardComments}
      />
      <CommentBoardListItems
        comments={comments}
        onDeleteComment={onDeleteComment}
        onUpdateComment={onUpdateComment}
      />
    </>
  );
}
