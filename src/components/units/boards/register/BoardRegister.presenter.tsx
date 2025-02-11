import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { IBoardRegisterUIProps } from "./BoardRegister.types";
import * as S from "./BoardRegisterStyles";
import UploadFile from "../../../commons/upload/Upload.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardRegisterUI(props: IBoardRegisterUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.PageTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.PageTitle>
        <S.WriterInfo>
          <S.Item>
            <S.SubTitle>* 닉네임</S.SubTitle>
            <S.InputBox
              id="nickname"
              type="text"
              placeholder="닉네임을 적어주세요."
              onChange={props.onChangeInputs}
              defaultValue={props.data?.nickname}
              readOnly={props.isEdit}
            ></S.InputBox>
            <S.ErrorMessage>{props.nicknameError}</S.ErrorMessage>
          </S.Item>
          <S.Item>
            <S.SubTitle>* 비밀번호</S.SubTitle>
            <S.InputBox
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            ></S.InputBox>
            <S.ErrorMessage>{props.pwdError}</S.ErrorMessage>
          </S.Item>
        </S.WriterInfo>
        <S.TitleInfo>
          <S.SubTitle>* 제목</S.SubTitle>
          <S.InputBoxTitle
            id="title"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.title}
          ></S.InputBoxTitle>
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.TitleInfo>
        <S.ContentsInfo>
          <S.SubTitle>* 내용</S.SubTitle>
          <S.TextBoxContents
            id="content"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.content}
          ></S.TextBoxContents>
          <S.ErrorMessage>{props.contentError}</S.ErrorMessage>
        </S.ContentsInfo>
        {/* <S.Address>
          <S.SubTitle>* 주소</S.SubTitle>
          <S.Zip>
            <S.ZipCode
              readOnly
              value={
                props.zipcode ||
                (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
              }
            ></S.ZipCode>
            <S.ZipCodeSearch onClick={props.onToggleModal}>
              우편번호 검색
            </S.ZipCodeSearch>
            <Modal
              open={props.isModalOpen}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
              destroyOnClose={true}
              okText="확인"
              cancelText="취소"
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          </S.Zip>
          <S.InputBoxTitle
            readOnly
            placeholder="주소를 검색해 주세요."
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
          ></S.InputBoxTitle>
          <S.InputBoxTitle
            id="addressDetail"
            type="text"
            placeholder="상세주소를 입력해주세요."
            onChange={props.onChangeInputs}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          ></S.InputBoxTitle>
          <S.ErrorMessage>{props.addressError}</S.ErrorMessage>
        </S.Address> */}
        {/* <S.TitleInfo>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.Img>
            {props.fileUrls.map((el, index) => (
              <UploadFile
                key={uuidv4()}
                fileUrl={el} // ex) 강아지.jpg
                index={index}
                onChangeFileUrls={props.onChangeFileUrls}
                deleteFileByIndex={props.deleteFileByIndex}
              />
            ))}
          </S.Img>
        </S.TitleInfo> */}
        {/* <S.TitleInfo>
          <S.SubTitle>메인 설정</S.SubTitle>
          <S.MainSet>
            <S.Label>
              <S.RadioButton
                type="radio"
                name="main"
                value="img"
                id="img"
              />
              사진
            </S.Label>
          </S.MainSet>
        </S.TitleInfo> */}
        <S.Submit>
          <S.SubmitBtn
            onClick={
              props.isEdit ? props.onClickUpdate : props.onClickValidation
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.Submit>
      </S.Wrapper>
    </>
  );
}
