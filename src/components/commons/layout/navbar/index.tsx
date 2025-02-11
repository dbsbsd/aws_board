import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { ButtonForMoveToPage } from "../../custom/customComponent.styles";

const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  white-space: nowrap;
`;

export default function LayoutNavbar() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <ButtonForMoveToPage onClick={onClickMoveToPage("/")}>
        자유 게시판
      </ButtonForMoveToPage>
    </Wrapper>
  );
}
