import styled from "styled-components";

export const TodoUpdateBtn = styled.button`
  width: 450px;
  height: 40px;
  background-color: #434343;
  border: 2px solid #434343;
  font-size: 1rem;
  font-weight: 700;
  color: white;
`;

export const CreateTodo = () => {
  return (
    <>
      <TodoUpdateBtn>할 일 추가하기</TodoUpdateBtn>
    </>
  );
};
