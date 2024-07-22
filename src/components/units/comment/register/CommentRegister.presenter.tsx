import * as S from "./CommentRegisterStyles";
import { IBoardCommentRegisterUIProps } from "./CommentRegister.types";

export default function BoardCommentUI(props: IBoardCommentRegisterUIProps) {
  return (
    <S.Wrapper>
      <S.Headers>
        <S.PencilIcon src="/yellow-pencil-img.png" />
        <S.HeadersTitle>댓글</S.HeadersTitle>
      </S.Headers>
      <S.InputWrapper>
        <S.Input
          onChange={props.onChangeNickname}
          type="text"
          placeholder="작성자"
          value={props.nickname || ""}
          readOnly={false} // 수정하기 기능이 없으므로 항상 수정 가능
        />
        <S.Input
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호"
          value={props.password}
        />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          onChange={props.onChangeContent}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={props.content || ""}
        />
      </S.ContentsWrapper>
      <S.BottomWrapper>
        <S.ContentsLength>
          {props.content.length || 0} / 100
        </S.ContentsLength>
        <S.Button onClick={props.onClickSubmit}>
          등록하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
