import { useEffect, useState } from "react";
import BoardsUI from "./BoardList.presenter";
import axios from "axios";
import { useRouter } from "next/router";

export default function Boards() {
  const router = useRouter();
  const [data, setData] = useState([]);

  // 데이터 불러오기
  const fetchBoards = async () => {
    try {
      const response = await axios.get("http://localhost:8181/board");
      setData(response.data.content);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const onClickMoveToRegisterPage = () => {
    router.push("/boards/new");
  };

  const onClickMoveToDetailPage = (id: string) => {
    router.push(`/boards/${id}`);
  };

  return (
    <>
      <BoardsUI
        data={data}
        onClickMoveToRegisterPage={onClickMoveToRegisterPage}
        onClickMoveToDetailPage={onClickMoveToDetailPage}
      />
    </>
  );
}