import styled from "styled-components";
import axios from "axios";

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

  &.done {
    text-decoration: line-through;
    color: lightblue;
  }
`;

export const TodoDate = styled.div`
  width: 300px;
  background-color: white;
  font-size: 1rem;

  &.done {
    text-decoration: line-through;
    color: lightblue;
  }
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

const handleTodoCheckboxClick = (id, done, renderTodos) => {
  axios({
    method: "patch",
    url: `http://localhost:3001/todos/${id}`,
    data: {
      done: !done,
    },
  })
    .then(() => {
      renderTodos();
    })
    .catch((err) => console.error("ERROR: ", err));
};

const handleTodoDeleteBtnClick = (id, renderTodos) => {
  axios
    .delete(`http://localhost:3001/todos/${id}`)
    .then(() => {
      renderTodos();
    })
    .catch((err) => {
      console.error("ERROR: ", err);
    });
};

export const Todo = ({ todo, renderTodos }) => {
  const { id, content, done, date } = todo;

  return (
    <TodoContainer>
      <TodoCheckbox
        type="checkbox"
        checked={done}
        onChange={() => {
          handleTodoCheckboxClick(id, done, renderTodos);
        }}
      ></TodoCheckbox>
      <TodoContent className={`${done ? "done" : ""}`}>{content}</TodoContent>
      <TodoDate className={`${done ? "done" : ""}`}>{date}</TodoDate>
      <TodoUpdateBtn>U</TodoUpdateBtn>
      <TodoDeleteBtn onClick={() => handleTodoDeleteBtnClick(id, renderTodos)}>
        D
      </TodoDeleteBtn>
    </TodoContainer>
  );
};
