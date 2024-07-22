import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CommentBoardListItems from "./CommentBoardListItems";
import { IBoardComment } from "../../../../commons/types/generated/types";

export default function BoardCommentList({ boardId }) {
  const router = useRouter();
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetchBoardComments();
  // }, []);

  const fetchBoardComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8181/board/${boardId}/comment`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching board comments:", error);
    }
  };

  const onCreateComment = async (newComment: IBoardComment) => {
    try {
      await axios.post(`http://localhost:8181/board/${boardId}/comment`, newComment);
      fetchBoardComments();
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const onDeleteComment = async (commentId: string, password: string) => {
    try {
      await axios.post(`http://localhost:8181/board/${boardId}/comment/${commentId}`, {
        data: {
          password: password,
        },
      });
      fetchBoardComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const onUpdateComment = async (commentId: string, updatedComment: IBoardComment) => {
    try {
      await axios.patch(`http://localhost:8181/board/${boardId}/comment/${commentId}`, updatedComment);
      fetchBoardComments();
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <CommentBoardListItems
      comments={comments}
      onCreateComment={onCreateComment}
      onDeleteComment={onDeleteComment}
      onUpdateComment={onUpdateComment}
    />
  );
}