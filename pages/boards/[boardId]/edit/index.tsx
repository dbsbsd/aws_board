import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios"; // axios 임포트
import BoardRegister from "../../../../src/components/units/boards/register/BoardRegister.container";

export default function BoardEditPage() {
  const router = useRouter();
  const [data, setData] = useState({
    nickname: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.boardId) {
        try {
          const response = await axios.get(`http://localhost:8181/board/${router.query.boardId}`);
          const boardData = response.data;

          // 필요한 데이터를 상태에 저장
          setData({
            nickname: boardData.nickname,
            title: boardData.title,
            content: boardData.content,
          });
        } catch (error) {
          console.error("Error fetching board data:", error);
        }
      }
    };

    fetchData();
  }, [router.query.boardId]);

  return (
    <BoardRegister
      isEdit={true}
      data={{
        nickname: data.nickname,
        title: data.title,
        content: data.content,
      }}
    />
  );
}
