import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 20px;
  border-bottom: 1px solid lightgray;

  @media screen and (${breakPoints.tablet}) {
    width: 100vw;
    padding: 1.5rem;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ContentsBox = styled.div`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateBox = styled.div`
  padding: 10px 0px 10px 60px;
  font-weight: 500;
  color: lightgray;
`;

export const PwdInput = styled.input`
  width: 300px;
  height: 30px;
`;

export const Headers = styled.div`
  width: 100%;
  padding: 40px 0px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  gap: 14px;
`;

export const PencilIcon = styled.img``;

export const HeadersTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  gap: 24px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  padding: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 108px;
  line-height: 24px;
  padding: 20px;
  border: none;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const ContentsLength = styled.div`
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 15%;
  height: 51px;
  padding: 14px 16px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
