import styled from "styled-components";
import { DatePanel } from "./DatePanel";

export const InfoPanelContainer = styled.div``;

export const InfoPanel = () => {
  return (
    <InfoPanelContainer>
      <DatePanel></DatePanel>
      {/* 투두 추가 버튼 */}
      {/* 투두 삭제 버튼 */}
    </InfoPanelContainer>
  );
};
