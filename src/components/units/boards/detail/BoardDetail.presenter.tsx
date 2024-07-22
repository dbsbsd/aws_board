import ReactPlayer from "react-player";
import { getDate } from "../../../../commons/utils/date";
import { IBoardDetailProps } from "./BoardDetail.types";
import * as S from "./BoardDetailStyles";

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <>
      <S.WrapperDetail>
        <S.WrapperTop>
          <S.LeftHead>
            <S.Avatar src="/ic_profile-56px.png"></S.Avatar>
            <S.Writer>
              <S.WriterName>{props.nickname}</S.WriterName>
              <S.Date>{getDate(props.createdAt)}</S.Date>
            </S.Writer>
          </S.LeftHead>
          <S.Line></S.Line>
          <S.BoardTitle>{props.title}</S.BoardTitle>
          <S.BoardContent>{props.content}</S.BoardContent>
        </S.WrapperTop>
        <S.BoardBtn>
          <S.BtnStyle onClick={props.onClickMoveToList}>목록보기</S.BtnStyle>
          <S.BtnStyle onClick={props.onClickMoveToEdit}>수정하기</S.BtnStyle>
          <S.BtnStyle onClick={props.onClickDelete}>삭제하기</S.BtnStyle>
        </S.BoardBtn>
      </S.WrapperDetail>
    </>
  );
}