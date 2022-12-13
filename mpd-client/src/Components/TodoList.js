import styled from "styled-components";

export const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoListContents = styled.div`
  width: 500px;
  height: 750px;
  border: 2px solid royalblue;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoListContents>체크박스 / TODO / 날짜 / 수정 / 삭제</TodoListContents>
      <p>추가 버튼</p>
    </TodoListContainer>
  );
};
