import styled from "styled-components";

export const TodoListContainer = styled.div``;

export const TodoListContents = styled.div``;

export const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoListContents>1. 밥먹기</TodoListContents>
      {/* TODO 추가 버튼 */}
    </TodoListContainer>
  );
};
