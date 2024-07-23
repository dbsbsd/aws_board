import { useEffect, useState } from "react";
import BoardsUI from "./BoardList.presenter";
import axios from "axios";
import { useRouter } from "next/router";

export default function Boards() {
  const urlApi = process.env.NEXT_PUBLIC_API_BASE_URL;
  const boardApi = process.env.NEXT_PUBLIC_BOARD;

  const router = useRouter();
  const [data, setData] = useState([]);

  // 데이터 불러오기
  const fetchBoards = async () => {
    try {
      const response = await axios.get(`${urlApi}${boardApi}`);
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