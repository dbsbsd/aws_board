import { Fragment } from "react";
import { getDate } from "../../../../commons/utils/date";
import { IBoardsUIProps } from "./BoardList.types";
import * as S from "./BoardListStyles";
import { ButtonForRegisterAction } from "../../../commons/custom/customComponent.styles";

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <Fragment>
      <S.Wrapper>
        <S.HeaderRow>
          <S.ColumnNumber>No.</S.ColumnNumber>
          <S.ColumnID></S.ColumnID>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnDate>날짜</S.ColumnDate>
        </S.HeaderRow>
        {props.data.map((board, index) => (
          <S.BodyRow
            key={board.id}
            id={board.id}
            onClick={() => props.onClickMoveToDetailPage(board.id)} // 클릭 시 ID 전달
          >
            <S.ColumnNumber>{index + 1}</S.ColumnNumber>
            <S.ColumnID></S.ColumnID>
            <S.ColumnTitle>{board.title}</S.ColumnTitle>
            <S.ColumnWriter>{board.nickname}</S.ColumnWriter>
            <S.ColumnDate>{getDate(board.createdAt)}</S.ColumnDate>
          </S.BodyRow>
        ))}
        <S.WrapperFooter>
          <ButtonForRegisterAction onClick={props.onClickMoveToRegisterPage}>
            <S.PencilImg src="./pencil-image.png" alt="Pencil" />
            게시물 등록하기
          </ButtonForRegisterAction>
        </S.WrapperFooter>
      </S.Wrapper>
    </Fragment>
  );
}