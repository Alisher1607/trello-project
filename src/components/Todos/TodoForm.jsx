import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/todoSlice";
import NameAndLogo from "../Form/NameAndLogo";
import {
  BoxToTodo,
  Button,
  ContainerForm,
  ContainerTodo,
  Input,
} from "./StyleTodoForm";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const card = {
    text: text,
    id: Math.random().toString(),
    subtask: [],
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length) {
      dispatch(addCard(card));
    }
    setText("");
  };

  return (
    <>
      <ContainerTodo>
        <NameAndLogo />
        <ContainerForm onSubmit={onSubmit}>
          <BoxToTodo>
            <Input
              type="text"
              placeholder="Добавить список"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit">ADD CARD</Button>
          </BoxToTodo>
        </ContainerForm>
        <TodoList />
      </ContainerTodo>
    </>
  );
};

export default TodoForm;
