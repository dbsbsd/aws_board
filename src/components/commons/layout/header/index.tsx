import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { Avatar, message } from "antd";
import { IMutation } from "../../../../commons/types/generated/types";
import { useState } from "react";
import { ButtonForMoveToPage } from "../../custom/customComponent.styles";
import { breakPoints } from "../../../../commons/styles/media";
import DropdownMenu from "../../dropDownMenu/DropdownMenu.container";
import { DownOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  height: 107px;
  display: flex;
`;

const InnerWrapper = styled.div`
  padding: 1.8rem;
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

const InnerLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const RightNavbar = styled.div`
  font-size: 1.25rem;
  font-weight: var(--font-weight-regular);
  display: flex;
  align-items: center;
`;

const UserAvatar = styled(Avatar)`
  margin-right: 0.5rem;
  background-color: #eaf5cf;
  cursor: pointer;
  color: var(--font-color-Grass);
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHead() {

  const { onClickMoveToPage } = useMoveToPage();
  const [isActive, setIsActive] = useState(false);

  const onClickActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {/* <InnerLogo onClick={onClickMoveToPage("/")}>
          <img src={"/ootd logo.png"} style={{ width: '100px', height: '100px' }}/>
        </InnerLogo> */}
        <InnerLogo onClick={onClickMoveToPage("/")}> Free </InnerLogo>
        <InnerLogo onClick={onClickMoveToPage("/")}> Board </InnerLogo>
      </InnerWrapper>
    </Wrapper>
  );
}
