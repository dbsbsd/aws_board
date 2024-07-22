import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardRegisterProps {
isEdit: boolean;
}

// 게시글 수정할 때 데이터 타입
export interface IVariables {
title?: string;
content?: string;
// boardAddress?: {
//   address?: string;
//   addressDetail?: string;
//   zipcode?: string;
// };
// images?: string[]; // ["", "", "강아지.jpg"]
}

// 게시글 등록할 때 데이터 타입
export interface IinputsType {
[key: string]: string; // index signature type 지정 => 객체[key]를 문자열 타입으로 지정해야 value에 접근 가능
nickname: string;
password: string;
title: string;
content: string;
// addressDetail: string;
}

export interface IBoardRegisterUIProps {
// prettier-ignore
onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
// onChangeFileUrls: (fileUrl: string, index: number) => void;
// deleteFileByIndex: (index: number) => void;
onClickValidation: () => void;
onClickUpdate: () => void;
// handleComplete: (data: Address) => void;
onToggleModal: () => void;
isActive: boolean;
isEdit: boolean;
data?: {
    title?: string;
    content?: string;
    nickname?: string;
}
isModalOpen: boolean;
// zipcode: string;
// address: string;
// fileUrls: string[];
nicknameError: string;
pwdError: string;
titleError: string;
contentError: string;
// addressError: string;
}

// 등록, 수정하기 버튼 타입
export interface ISubmitBtnProps {
isActive: boolean;
}