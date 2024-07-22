import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import BoardRegisterUI from "./BoardRegister.presenter";
import {
  IBoardRegisterProps,
  IVariables,
  IinputsType,
} from "./BoardRegister.types";
import { Modal, message } from "antd";

const DEFAULT_VALUE = {
  nickname: "",
  password: "",
  title: "",
  content: "",
  // addressDetail: "",
};

export default function BoardRegister(props: IBoardRegisterProps) {
  const router = useRouter();

  const [inputs, setInputs] = useState<IinputsType>(DEFAULT_VALUE);

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nicknameError, setNicknameError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  // const [addressError, setAddressError] = useState("");

  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // ** 게시글 항목 입력 이벤트 핸들러
  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    if (inputs.nickname) setNicknameError("");
    if (inputs.password) setPwdError("");
    if (inputs.title) setTitleError("");
    if (inputs.content) setContentError("");
    // if (inputs.addressDetail) setAddressError("");

    for (const key in inputs) {
      if (inputs[key] !== "" && event.target.value) setIsActive(true);
      else setIsActive(false);
    }
  };

  // const deleteFileByIndex = (index: number) => {
  //   const result = fileUrls.filter((_, fileUrlIndex) => fileUrlIndex !== index);
  //   const fileurls = [];
  //   for (let i = 0; i < fileUrls.length; i++) {
  //     result[i] ? fileurls.push(result[i]) : fileurls.push("");
  //   }
  //   setFileUrls(fileurls);
  // };

  // // ** 이미지 업로드
  // const onChangeFileUrls = (fileUrl: string, index: number) => {
  //   const newFileUrls = [...fileUrls];
  //   for (let i = 0; i < newFileUrls.length; i++) {
  //     if (!newFileUrls[i]) {
  //       newFileUrls[i] = fileUrl;
  //       break;
  //     }
  //   }
  //   setFileUrls(newFileUrls);
  // };

  // // 만약 이미지가 있다면 배열에 넣어줘
  // useEffect(() => {
  //   if (props.data?.fetchBoard.images)
  //     setFileUrls([...props.data?.fetchBoard.images]);
  // }, [props.data]);

  // ** 주소 모달
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // ** 주소 이벤트 핸들러
  const handleComplete = (data: Address) => {
    onToggleModal();
    // setZipcode(data.zonecode);
    // setAddress(data.address);
  };

  // ** 게시글 등록
  const onClickValidation = async () => {
    if (!inputs.nickname) setNicknameError("작성자를 입력해주세요.");
    if (!inputs.password) setPwdError("비밀번호를 입력해주세요.");
    if (!inputs.title) setTitleError("제목을 입력해주세요.");
    if (!inputs.content) setContentError("내용을 입력해주세요.");
    // if (!inputs.addressDetail) setAddressError("상세주소를 입력해주세요.");

    for (const key in inputs) {
      if (inputs[key] === "") return;
    }

    try {
      const response = await axios.post("http://localhost:8181/board", {
        nickname: inputs.nickname,
        password: inputs.password,
        title: inputs.title,
        content: inputs.content,
        // boardAddress: {
        //   zipcode,
        //   address,
        //   addressDetail: inputs.addressDetail,
        // },
        // images: fileUrls,
      });

      const result = response.data;
      console.log("Response:", result);
      router.push(`/boards/${result._id}`);
    } catch (error) {
      alert(error);
    }
  };

  // ** 게시글 수정
  const onClickUpdate = async () => {
    // 이미지가 변경되었는지 비교 (배열을 문자열로 만들어서 비교, 주소가 다르므로)
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    // const isChangeFiles = currentFiles !== defaultFiles; // true : 이미지 변경

    if (!inputs.password) {
      message.warning({ content: "비밀번호를 입력해주세요." });
      return;
    }

    if (
      !inputs.title &&
      !inputs.content
      // !inputs.contents &&
      // !zipcode &&
      // !address &&
      // !inputs.addressDetail &&
      // !isChangeFiles
    ) {
      message.info({ content: "수정한 내용이 없습니다." });
      return;
    }

    const updateBoardInput: IVariables = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.content) updateBoardInput.content = inputs.content;
    // if (address || zipcode || inputs.addressDetail) {
    //   updateBoardInput.boardAddress = {};
    //   if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
    //   if (address) updateBoardInput.boardAddress.address = address;
    //   if (inputs.addressDetail)
    //     updateBoardInput.boardAddress.addressDetail = inputs.addressDetail;
    // }
    // if (isChangeFiles) updateBoardInput.images = fileUrls;
    console.log(updateBoardInput);

    try {
      const response = await axios.patch(`http://localhost:8181/board/${router.query.boardId}`, {
        title: inputs.title,
        content: inputs.content,
        password: inputs.password,
      });
    console.log(updateBoardInput);

      // const result = response.data;
      // if (result.message === "비밀번호가 일치하지 않습니다.") {
      //   Modal.warning({ content: result.message });
      //   return;
      // }
      // message.success({ content: "수정이 완료되었습니다." });
      // router.push(`/boards/${result._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.warning({ content: error.message });
      }
    }
  };

  return (
    <>
      <BoardRegisterUI
        nicknameError={nicknameError}
        pwdError={pwdError}
        titleError={titleError}
        contentError={contentError}
        // addressError={addressError}
        onChangeInputs={onChangeInputs}
        // onChangeFileUrls={onChangeFileUrls}
        // deleteFileByIndex={deleteFileByIndex}
        onClickValidation={onClickValidation}
        onClickUpdate={onClickUpdate}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
        // handleComplete={handleComplete}
        onToggleModal={onToggleModal}
        isModalOpen={isModalOpen}
        // zipcode={zipcode}
        // address={address}
        // fileUrls={fileUrls}
      />
    </>
  );
}
