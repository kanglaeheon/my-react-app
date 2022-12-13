import styled from "styled-components";
import { useState, useRef } from "react";

export const TodoCreateInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TodoCreateInputLabel = styled.label`
  width: 40px;
  margin-left: 5px;
  background-color: white;
  text-align: center;
  color: #434343;
`;

export const TodoCreateInputElement = styled.input`
  width: 300px;
  height: 2rem;
  background-color: white;
  border: none;
  border-bottom: 2px solid #434343;
  padding: 0 0 5px 5px;
  outline: none;
`;

export const TodoCreateInputSubmitBtn = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 10px;
  border: none;
  background-color: moccasin;
`;

export const CreateTodoInput = ({ handleCreateBtnClick }) => {
  const [inputText, setInputText] = useState("");
  const inputTextElement = useRef(null);

  const handleCreateInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <TodoCreateInputContainer>
      <TodoCreateInputLabel htmlFor="todo_input">Todo</TodoCreateInputLabel>
      <TodoCreateInputElement
        type="text"
        id="todo_input"
        placeholder="할 일을 입력하세요."
        maxLength={20}
        ref={inputTextElement}
        onChange={(e) => {
          handleCreateInputChange(e);
        }}
      />
      <TodoCreateInputSubmitBtn handleCreateBtnClick={handleCreateBtnClick}>
        +
      </TodoCreateInputSubmitBtn>
    </TodoCreateInputContainer>
  );
};
