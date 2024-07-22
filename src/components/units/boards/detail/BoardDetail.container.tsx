import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { message, Modal, Input } from "antd";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [boardContent, setBoardContent] = useState<string>("");
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [boardNickname, setBoardNickname] = useState<string>("");
  const [boardCreatedAt, setBoardCreatedAt] = useState<string>("");
  const [boardUpdatedAt, setBoardUpdatedAt] = useState<string>("");
  const [boardId, setBoardId] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof router.query.boardId !== "string") return;
    fetchBoardData();
  }, [router.query.boardId]);

  const fetchBoardData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8181/board/${router.query.boardId}`
      );
      const data = response.data;
      setBoardContent(data.content);
      setBoardTitle(data.title);
      setBoardNickname(data.nickname);
      setBoardCreatedAt(data.createdAt);
      setBoardUpdatedAt(data.updatedAt);
      setBoardId(data.id);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") return;
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      await axios.post(`http://localhost:8181/board/${router.query.boardId}`, {
        password: password,
      });
      message.success({ content: "게시물이 정상적으로 삭제되었습니다." });
      router.push("/");
    } catch (error) {
      message.error({ content: "비밀번호가 틀립니다." });
    } finally {
      setIsModalVisible(false);
      setPassword("");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setPassword("");
  };

  const onClickMoveToList = () => {
    router.push("/");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <>
      <BoardDetailUI
        content={boardContent}
        title={boardTitle}
        nickname={boardNickname}
        createdAt={boardCreatedAt}
        updatedAt={boardUpdatedAt}
        id={boardId}
        onClickDelete={onClickDelete}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
      />
      <Modal
        title="Password"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input.Password
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    </>
  );
}
