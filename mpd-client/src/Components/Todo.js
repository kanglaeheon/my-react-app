import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 450px;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid #434343;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TodoCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const TodoContent = styled.div`
  width: 300px;
  background-color: white;
  font-size: 1rem;
`;

export const TodoDate = styled.div`
  width: 300px;
  background-color: white;
  font-size: 1rem;
`;

export const TodoUpdateBtn = styled.button`
  background-color: white;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #ffd177;
  color: #434343;
`;

export const TodoDeleteBtn = styled.button`
  background-color: white;
  border-radius: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #ffd177;
  color: #434343;
`;

const handleTodoCheckboxClick = (id, done, renderTodos) => {};

export const Todo = ({ todo }) => {
  const { id, content, done, date } = todo;

  return (
    <TodoContainer>
      <TodoCheckbox type="checkbox" checked={done}></TodoCheckbox>
      <TodoContent>{content}</TodoContent>
      <TodoDate>{date}</TodoDate>
      <TodoUpdateBtn>U</TodoUpdateBtn>
      <TodoDeleteBtn>D</TodoDeleteBtn>
    </TodoContainer>
  );
};
