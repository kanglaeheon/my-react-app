import { useState } from "react";
import styled from "styled-components";
import { dummyData } from "../static/dummyData";

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
  console.log(dummyData);
  const data = dummyData;
  const [todos, setTodos] = useState(data);

  return (
    <TodoListContainer>
      <TodoListContents>
        {todos.map((todo) => {
          return <p>{todo.content}</p>;
        })}
      </TodoListContents>

      {/* <TodoListContents>체크박스 / TODO / 날짜 / 수정 / 삭제</TodoListContents> */}
      <p>추가 버튼</p>
    </TodoListContainer>
  );
};
